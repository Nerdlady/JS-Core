(() => {
    "use strict";
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }

        return this;
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }

        return this;
    };

    String.prototype.isEmpty = function () {
        return this === "";
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this;
        }

        if (this.charCodeAt(' ') < 0) {
            return this.slice(0, -3) + '...';
        }

        let newStr = this.slice(0, n -1);
        let index = newStr.lastIndexOf(' ');
        newStr = newStr.slice(0, index);
        return newStr + '...';
    };

    String.format = function (string, ...params) {
        let newStr = string;
        for (let i = 0; i < params.length; i++) {
            newStr = newStr.replace(`{${i}}`, params[i]);
        }
        return newStr;
    };

})()
