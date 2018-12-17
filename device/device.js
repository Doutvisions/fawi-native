var Device = /** @class */ (function () {
    function Device() {
        var _this = this;
        this.getInfo = new Promise(function (resolve, reject) {
            _this.isAvailable();
            setTimeout(function () {
                var info = _this.get();
                if (info != null || info != undefined)
                    resolve(info);
                else
                    reject(false);
            }, 1000);
        });
    }
    Device.prototype.get = function () {
        return this.info;
    };
    Device.prototype.setInfo = function (info) {
        this.info = info;
    };
    Device.prototype.getDeviceInfoResult = function (jsonInfo) {
        this.setInfo(jsonInfo);
    };
    Device.prototype.isAvailable = function () {
        if (typeof HSNative !== "undefined" && HSNative !== null) {
            HSNative.getDeviceInfo("Device.prototype.getDeviceInfoResult");
        }
        else {
            console.error("Android support");
        }
    };
    return Device;
}());
