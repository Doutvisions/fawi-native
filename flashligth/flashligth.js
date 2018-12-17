var Flashligth = /** @class */ (function () {
    function Flashligth() {
        var _this = this;
        this.response = false;
        this.available = new Promise(function (resolve, reject) {
            _this.getFlashLightAvailable();
            setTimeout(function () {
                var v_available = _this.getAvailable();
                if (v_available != null || v_available != undefined)
                    resolve(v_available);
                else
                    reject(new Error('Error on execut function '));
            }, 1000);
        });
    }
    Flashligth.prototype.getAvailable = function () {
        return this.available;
    };
    Flashligth.prototype.setAvailable = function (available) {
        this.available = available;
    };
    Flashligth.prototype.getStatus = function () {
        return this.status;
    };
    Flashligth.prototype.setStatus = function (status) {
        this.status = status;
    };
    Flashligth.prototype.getResponse = function () {
        return this.response;
    };
    Flashligth.prototype.setResponse = function (response) {
        this.response = response;
    };
    Flashligth.prototype.getFlashAvailableResult = function (response) {
        this.setAvailable(response);
    };
    Flashligth.prototype.getFlashLightAvailable = function () {
        if (typeof HSNative !== "undefined" && HSNative !== null) {
            HSNative.getFlashAvailable("Flashligth.prototype.getFlashAvailableResult");
        }
        else {
            console.error("Android support");
        }
    };
    Flashligth.prototype.stateFlashLightResult = function (status) {
        this.setStatus(status);
    };
    Flashligth.prototype.stateFlashLight = function () {
        if (typeof HSNative !== "undefined" && HSNative !== null) {
            HSNative.getFlashState("Flashligth.prototype.stateFlashLightResult");
        }
        else {
            console.error("Android support");
        }
    };
    Flashligth.prototype.toggleFlashResult = function (response) {
        this.setResponse(response);
    };
    Flashligth.prototype.toogleFlashLight = function () {
        if (typeof HSNative !== "undefined" && HSNative !== null) {
            HSNative.toggleFlash("Flashligth.prototype.toggleFlashResult");
        }
        else {
            console.error("Android support");
        }
    };
    Flashligth.prototype.state = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.stateFlashLight();
            setTimeout(function () {
                var v_status = _this.getStatus();
                if (v_status != null || v_status != undefined)
                    resolve(v_status);
                else
                    reject(new Error('Error on execut function '));
            }, 1000);
        });
    };
    Flashligth.prototype.toogle = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.toogleFlashLight();
            setTimeout(function () {
                var v_response = _this.getResponse();
                if (v_response === true)
                    resolve(v_response);
                else
                    reject(new Error('Error on execut function'));
            }, 1000);
        });
    };
    return Flashligth;
}());
