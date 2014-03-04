/// <reference path="../reference.ts"/>
interface Message {
    id: number;
    from: Person;
    to: Person;
    message: string;
    read: boolean;
    
}