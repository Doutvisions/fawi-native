var Geolocalization = /** @class */ (function () {
    function Geolocalization() {
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
    Geolocalization.prototype.getLatitudeVal = function () {
        return this.latitude;
    };
    Geolocalization.prototype.setLatitude = function (latitude) {
        this.latitude = latitude;
    };
    Geolocalization.prototype.getLongitudeVal = function () {
        return this.longitude;
    };
    Geolocalization.prototype.setLongitude = function (longitude) {
        this.longitude = longitude;
    };
    Geolocalization.prototype.getDeviceInfoResult = function (lat, long) {
        var latitude = parseFloat(lat);
        var longitude = parseFloat(long);
        this.setLatitude(latitude);
        this.setLongitude(longitude);
    };
    Geolocalization.prototype.isAvailable = function () {
        if (typeof HSNative !== "undefined" && HSNative !== null) {
            HSNative.getGPSLocation("Geolocalization.prototype.getDeviceInfoResult");
        }
        else {
            console.error("Android support");
        }
    };
    return Geolocalization;
}());
