/// <reference path="reference.ts"/>
var InboxModule = require('./Classes/Inbox');
var MessageStoreModule = require('./Classes/MessageStore');

var messageStore = new MessageStoreModule.MessageStore();
var josh = { firstname: "Joshua", lastname: "Lunsford" };
var tyson = { firstname: "Tyson", lastname: "Hester" };
var joshInbox = new InboxModule.Inbox(josh, messageStore);
var tysonInbox = new InboxModule.Inbox(tyson, messageStore);

joshInbox.on("message", function (message) {
    setTimeout(function () {
        var msg = JSON.parse(message);
        console.log(msg.from.firstname + ': ' + msg.message);
        var reply = joshInbox.newMessage();
        reply.to = msg.from;
        reply.message = "Yo Back";
        joshInbox.sendMessage(reply);
    }, 100);
});

tysonInbox.on("message", function (message) {
    setTimeout(function () {
        var msg = JSON.parse(message);
        console.log(msg.from.firstname + ': ' + msg.message);
        var reply = tysonInbox.newMessage();
        reply.to = msg.from;
        reply.message = "Yo";
        tysonInbox.sendMessage(reply);
    }, 100);
});

var messageToTyson = joshInbox.newMessage();
messageToTyson.to = tyson;
messageToTyson.message = "Hey buddy";
joshInbox.sendMessage(messageToTyson);

setTimeout(function () {
    joshInbox.removeAllListeners();
    tysonInbox.removeAllListeners();
}, 1000);
//# sourceMappingURL=server.js.map
