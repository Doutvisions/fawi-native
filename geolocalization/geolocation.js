var Geolocation = /** @class */ (function () {
    function Geolocation() {
        var _this = this;
        this.getCoordinates = new Promise(function (resolve, reject) {
            _this.isAvailable();
            setTimeout(function () {
                var latitude = _this.getLatitudeVal();
                var longitude = _this.getLongitudeVal();
                if ((latitude != null || latitude != undefined) && (longitude != null || longitude != undefined))
                    resolve({"coords": {"latitude":latitude, "longitude":longitude}});
                else
                    reject("No value to show!");
            }, 1000);
        });
    }
    Geolocation.prototype.getLatitudeVal = function () {
        return this.latitude;
    };
    Geolocation.prototype.setLatitude = function (latitude) {
        this.latitude = latitude;
    };
    Geolocation.prototype.getLongitudeVal = function () {
        return this.longitude;
    };
    Geolocation.prototype.setLongitude = function (longitude) {
        this.longitude = longitude;
    };
    Geolocation.prototype.getDeviceInfoResult = function (lat, long) {
        var latitude = parseFloat(lat);
        var longitude = parseFloat(long);
        this.setLatitude(latitude);
        this.setLongitude(longitude);
    };
    Geolocation.prototype.isAvailable = function () {
        if (typeof HSNative !== "undefined" && HSNative !== null) {
            HSNative.getGPSLocation("Geolocation.prototype.getDeviceInfoResult");
        }
        else {
            console.error("Android support");
        }
    };
    return Geolocation;
}());
