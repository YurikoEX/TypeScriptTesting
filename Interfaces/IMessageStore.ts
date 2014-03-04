/// <reference path="../reference.ts"/>
interface IMessageStore {
    getMessagesForPerson(owner:Person):Message[];
    deleteMessage(message:Message):boolean;
    sendMessage(message:Message):boolean;
    on(event:string, listener:Function):any;
    removeAllListeners(event?: string): any;
}