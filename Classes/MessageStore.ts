/// <reference path="../reference.ts"/>
import EventerModule = require('../Helpers/Eventer');

export class MessageStore extends EventerModule.Eventer implements IMessageStore {

    public messages:Message[] = [];

    constructor(){
        super();
        //default data
        this.messages.push(<Message>{id:Math.floor(Math.random()*100000000),from:<Person>{firstname:"Joshua",lastname:"Lunsford"},to:<Person>{firstname:"Tyson",lastname:"Hester"},message:"HEy",read:true});
        this.messages.push(<Message>{id:Math.floor(Math.random()*100000000),from:<Person>{firstname:"Tyson",lastname:"Hester"},to:<Person>{firstname:"Joshua",lastname:"Lunsford"},message:"sup",read:true});
        this.messages.push(<Message>{id:Math.floor(Math.random()*100000000),from:<Person>{firstname:"Joshua",lastname:"Lunsford"},to:<Person>{firstname:"Tyson",lastname:"Hester"},message:"nothing",read:true});
        this.messages.push(<Message>{id:Math.floor(Math.random()*100000000),from:<Person>{firstname:"Tyson",lastname:"Hester"},to:<Person>{firstname:"Joshua",lastname:"Lunsford"},message:"cool",read:false});
    }

    getMessagesForPerson(owner:Person):Message[]{
        var ret = [];
        this.messages.forEach((message) => {
            if(JSON.stringify(message.from) == JSON.stringify(owner))
                ret.push(message)
        });
        return ret;
    }

    deleteMessage(message:Message):boolean{
        var index = this.messages.indexOf(message);
        if(index !== -1)
        {
            this.messages.splice(index,1);
            return true;
        }
        return false;
    }

    sendMessage(message:Message):boolean{
        this.messages.push(message);
        this.emit(JSON.stringify(message.to),JSON.stringify(message));
        return true;
    }
}