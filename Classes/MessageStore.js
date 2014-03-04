var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../reference.ts"/>
var EventerModule = require('../Helpers/Eventer');

var MessageStore = (function (_super) {
    __extends(MessageStore, _super);
    function MessageStore() {
        _super.call(this);
        this.messages = [];

        //default data
        this.messages.push({ id: Math.floor(Math.random() * 100000000), from: { firstname: "Joshua", lastname: "Lunsford" }, to: { firstname: "Tyson", lastname: "Hester" }, message: "HEy", read: true });
        this.messages.push({ id: Math.floor(Math.random() * 100000000), from: { firstname: "Tyson", lastname: "Hester" }, to: { firstname: "Joshua", lastname: "Lunsford" }, message: "sup", read: true });
        this.messages.push({ id: Math.floor(Math.random() * 100000000), from: { firstname: "Joshua", lastname: "Lunsford" }, to: { firstname: "Tyson", lastname: "Hester" }, message: "nothing", read: true });
        this.messages.push({ id: Math.floor(Math.random() * 100000000), from: { firstname: "Tyson", lastname: "Hester" }, to: { firstname: "Joshua", lastname: "Lunsford" }, message: "cool", read: false });
    }
    MessageStore.prototype.getMessagesForPerson = function (owner) {
        var ret = [];
        this.messages.forEach(function (message) {
            if (JSON.stringify(message.from) == JSON.stringify(owner))
                ret.push(message);
        });
        return ret;
    };

    MessageStore.prototype.deleteMessage = function (message) {
        var index = this.messages.indexOf(message);
        if (index !== -1) {
            this.messages.splice(index, 1);
            return true;
        }
        return false;
    };

    MessageStore.prototype.sendMessage = function (message) {
        this.messages.push(message);
        this.emit(JSON.stringify(message.to), JSON.stringify(message));
        return true;
    };
    return MessageStore;
})(EventerModule.Eventer);
exports.MessageStore = MessageStore;
//# sourceMappingURL=MessageStore.js.map
