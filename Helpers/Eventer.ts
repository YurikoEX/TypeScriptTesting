///<reference path="../reference.ts"/>
import events = require("events");

export class Eventer extends events.EventEmitter {
    constructor() {
        super();
    }
}
