var Contacts = /** @class */ (function () {
    function Contacts() {
        var _this = this;
        this.getContacts = new Promise(function (resolve, reject) {
            _this.isAvailable();
            setTimeout(function () {
                var contacts = _this.getListContact();
                if (contacts != null || contacts != undefined)
                    resolve(contacts);
                else
                    reject("No value to show!");
            }, 5000);
        });
    }
    Contacts.prototype.getListContact = function () {
        return this.listContact;
    };
    Contacts.prototype.setListContact = function (Contacts) {
        this.listContact = Contacts;
    };
    Contacts.prototype.getDeviceContactsResult = function (Contacts) {
        this.setListContact(Contacts);
    };
    Contacts.prototype.isAvailable = function () {
        if (typeof HSNative !== "undefined" && HSNative !== null) {
            HSNative.getDeviceContacts("Contacts.prototype.getDeviceContactsResult");
        }
        else {
            console.error("Android support");
        }
    };
    return Contacts;
}());
