/// <reference path="../reference.ts"/>
interface IInbox {
    owner: Person;
    messages : Message[];
    openMessage(id:number):Message;
    deleteMessage(id:number):boolean;
    markRead(id:number):boolean;
    newMessage():Message;
    replyMessage(id:number):Message;
    on(event:string, listener:Function):any;
    removeAllListeners(event?: string): any;
    sendMessage(message:Message):boolean;
}