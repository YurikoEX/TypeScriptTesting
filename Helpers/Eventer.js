var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="../reference.ts"/>
var events = require("events");

var Eventer = (function (_super) {
    __extends(Eventer, _super);
    function Eventer() {
        _super.call(this);
    }
    return Eventer;
})(events.EventEmitter);
exports.Eventer = Eventer;
//# sourceMappingURL=Eventer.js.map
