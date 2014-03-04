/// <reference path="../reference.ts"/>

import EventerModule = require('../Helpers/Eventer');

export class Inbox extends EventerModule.Eventer implements IInbox{

    public owner:Person;
    public messages:Message[];
    private dataStore:IMessageStore;
    constructor(owner:Person, dataStore:IMessageStore){
        super();
        this.owner = owner;
        this.dataStore = dataStore;
        this.messages = dataStore.getMessagesForPerson(this.owner);
        this.dataStore.on(JSON.stringify(this.owner),(message)=>{
            this.messages = dataStore.getMessagesForPerson(this.owner);
            this.emit("message",message);
        });

    }

    openMessage(id:number):Message{
        var ret:Message;
        this.messages.forEach((message) => {
            if(message.id == id)
                ret = message;
        });
        return ret;
    }

    deleteMessage(id:number):boolean{
        var msg:Message;
        this.messages.forEach((message) => {
            if(message.id == id)
                msg = message;
        });
        return this.dataStore.deleteMessage(msg);
    }

    markRead(id:number):boolean{
        var ret:Message;
        this.messages.forEach((element) => {
            if(element.id == id){
                element.read=true;
            }
        });
        return true;
    }

    newMessage():Message{
        return <Message>{
            id:Math.floor(Math.random()*100000000),
            from: this.owner,
            to: {},
            message: "",
            read: false
        };
    }

    sendMessage(message:Message):boolean{
        this.dataStore.sendMessage(message);
        return true;
    }

    replyMessage(id:number):Message{
        var ret:Message;
        console.log(id);
        this.messages.forEach((message)=> {
            console.log(JSON.stringify(message));
            if(message.id == id)
                ret = message;
        });

        return <Message>{
            id:Math.floor(Math.random()*100000000),
            from: this.owner,
            to: ret.from,
            message: "",
            read: false
        };
    }
}