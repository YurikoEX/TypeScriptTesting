/// <reference path="reference.ts"/>

import InboxModule = require('./Classes/Inbox');
import MessageStoreModule = require('./Classes/MessageStore');

var messageStore:IMessageStore = new MessageStoreModule.MessageStore();
var josh:Person = <Person>{firstname:"Joshua",lastname:"Lunsford"};
var tyson:Person = <Person>{ firstname: "Tyson", lastname: "Hester" };
var joshInbox:IInbox = new InboxModule.Inbox(josh,messageStore);
var tysonInbox:IInbox = new InboxModule.Inbox(tyson,messageStore);

joshInbox.on("message",(message)=>{
    setTimeout(()=>{
        var msg:Message = JSON.parse(message);
        console.log(msg.from.firstname + ': '+msg.message);
        var reply = joshInbox.newMessage();
        reply.to = msg.from;
        reply.message = "Yo Back";
        joshInbox.sendMessage(reply);
    },100);
});

tysonInbox.on("message",(message)=>{
    setTimeout(()=>{
        var msg:Message = JSON.parse(message);
        console.log(msg.from.firstname + ': '+msg.message);
        var reply = tysonInbox.newMessage();
        reply.to = msg.from;
        reply.message = "Yo";
        tysonInbox.sendMessage(reply);
    },100);
});

var messageToTyson = joshInbox.newMessage();
messageToTyson.to = tyson;
messageToTyson.message = "Hey buddy";
joshInbox.sendMessage(messageToTyson);

setTimeout(()=>{
    joshInbox.removeAllListeners();
    tysonInbox.removeAllListeners();
},1000);
