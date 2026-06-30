import file from '@system.file';
import router from '@system.router';
import storage from '@system.storage';
import battery from '@system.battery';

export default {
    data: {
        bookName: '',
        fullText: '',
        textContent: '正在加载中...',
        currentIndex: 0,
        pageSize: 110,
        filePosition: 0,
        readBlockSize: 1000,
        isEndOfFile: false,
        timeText: '00:00',
        batteryLevel: '100',
        timerId: null
    },
    onInit() {
        if (this.bookName) {
            console.info('=== [阅读页] 成功接收到书名: ' + this.bookName);
        } else {
            this.bookName = '未知书籍';
        }
    },
    onShow() {
        this.fullText = '';
        this.filePosition = 0;
        this.currentIndex = 0;
        this.isEndOfFile = false;

        this.updateSystemInfo();
        this.startTimeUpdate();
        this.loadSavedProgress();
    },
    onHide() {
        this.stopTimeUpdate();
    },
    startTimeUpdate() {
        var that = this;
        that.timerId = setInterval(function() {
            that.updateSystemInfo();
        }, 30000);
    },
    stopTimeUpdate() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    },
    updateSystemInfo() {
        var that = this;

        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var strHours = hours < 10 ? '0' + hours : '' + hours;
        var strMinutes = minutes < 10 ? '0' + minutes : '' + minutes;
        that.timeText = strHours + ':' + strMinutes;

        try {
            battery.getStatus({
                success: function(data) {
                    var val = data.level;
                    if (val <= 1) {
                        that.batteryLevel = Math.floor(val * 100).toString();
                    } else {
                        that.batteryLevel = Math.floor(val).toString();
                    }
                    if (that.fullText.length > 0) {
                        that.showPage();
                    }
                }
            });
        } catch (e) {
            console.error(e.message);
        }
    },
    loadSavedProgress() {
        var that = this;
        try {
            storage.get({
                key: 'progress_' + that.bookName,
                success: function(data) {
                    if (data) {
                        that.currentIndex = parseInt(data);
                    } else {
                        that.currentIndex = 0;
                    }
                    that.loadNextBlock();
                },
                fail: function(data, code) {
                    that.currentIndex = 0;
                    that.loadNextBlock();
                }
            });
        } catch(e) {
            that.currentIndex = 0;
            that.loadNextBlock();
        }
    },
    saveCurrentProgress() {
        var that = this;
        try {
            storage.set({
                key: 'progress_' + that.bookName,
                value: that.currentIndex.toString()
            });
        } catch(e) {
            console.error(e.message);
        }
    },
    loadNextBlock() {
        if (this.isEndOfFile) return;

        var that = this;
        var fileUri = 'internal://app/' + that.bookName;

        try {
            file.readText({
                uri: fileUri,
                position: that.filePosition,
                length: that.readBlockSize,
                success: function(data) {
                    var newText = "";
                    if (data && data.text) { newText = data.text; }
                    else if (typeof data === 'string') { newText = data; }

                    if (!newText || newText.length === 0) {
                        that.isEndOfFile = true;
                        return;
                    }

                    that.fullText += newText;
                    that.filePosition += that.readBlockSize;

                    if (that.fullText.length <= that.currentIndex && !that.isEndOfFile) {
                        that.loadNextBlock();
                    } else {
                        if (that.textContent === '正在加载中...') {
                            that.showPage();
                        }
                    }
                },
                fail: function(err, code) {
                    that.isEndOfFile = true;
                    if (that.fullText.length === 0) {
                        that.textContent = '读取失败或文件为空';
                    } else {
                        that.showPage();
                    }
                }
            });
        } catch (e) {
            console.error(e.message);
        }
    },
    showPage() {
        var start = this.currentIndex;
        var end = start + this.pageSize;

        if (!this.isEndOfFile && (this.fullText.length - start) < (this.pageSize * 2)) {
            this.loadNextBlock();
        }

        if (start >= this.fullText.length && this.isEndOfFile) {
            this.textContent = "--- 本书已读完 ---";
            return;
        }

        var pageText = this.fullText.substring(start, end);

        var headerStatus = "[" + this.timeText + "  电量:" + this.batteryLevel + "%]\n\n";
        this.textContent = headerStatus + pageText;
    },
    handleSwipe(e) {
        if (e.direction === 'right') {
            this.saveCurrentProgress();
            this.stopTimeUpdate();
            router.replace({ uri: 'pages/index/index' });
        } else if (e.direction === 'down' || e.direction === 'left') {
            var nextIndex = this.currentIndex + this.pageSize;
            if (nextIndex < this.fullText.length || !this.isEndOfFile) {
                this.currentIndex = nextIndex;
                this.showPage();
                this.saveCurrentProgress();
            } else {
                this.textContent = "--- 本书已读完 ---";
            }
        } else if (e.direction === 'up') {
            this.currentIndex -= this.pageSize;
            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            }
            this.showPage();
            this.saveCurrentProgress();
        }
    }
}