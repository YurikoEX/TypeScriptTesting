/// <reference path="../reference.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EventerModule = require('../Helpers/Eventer');

var Inbox = (function (_super) {
    __extends(Inbox, _super);
    function Inbox(owner, dataStore) {
        var _this = this;
        _super.call(this);
        this.owner = owner;
        this.dataStore = dataStore;
        this.messages = dataStore.getMessagesForPerson(this.owner);
        this.dataStore.on(JSON.stringify(this.owner), function (message) {
            _this.messages = dataStore.getMessagesForPerson(_this.owner);
            _this.emit("message", message);
        });
    }
    Inbox.prototype.openMessage = function (id) {
        var ret;
        this.messages.forEach(function (message) {
            if (message.id == id)
                ret = message;
        });
        return ret;
    };

    Inbox.prototype.deleteMessage = function (id) {
        var msg;
        this.messages.forEach(function (message) {
            if (message.id == id)
                msg = message;
        });
        return this.dataStore.deleteMessage(msg);
    };

    Inbox.prototype.markRead = function (id) {
        var ret;
        this.messages.forEach(function (element) {
            if (element.id == id) {
                element.read = true;
            }
        });
        return true;
    };

    Inbox.prototype.newMessage = function () {
        return {
            id: Math.floor(Math.random() * 100000000),
            from: this.owner,
            to: {},
            message: "",
            read: false
        };
    };

    Inbox.prototype.sendMessage = function (message) {
        this.dataStore.sendMessage(message);
        return true;
    };

    Inbox.prototype.replyMessage = function (id) {
        var ret;
        console.log(id);
        this.messages.forEach(function (message) {
            console.log(JSON.stringify(message));
            if (message.id == id)
                ret = message;
        });

        return {
            id: Math.floor(Math.random() * 100000000),
            from: this.owner,
            to: ret.from,
            message: "",
            read: false
        };
    };
    return Inbox;
})(EventerModule.Eventer);
exports.Inbox = Inbox;
//# sourceMappingURL=Inbox.js.map
