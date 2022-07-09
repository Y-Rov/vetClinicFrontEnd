import { MessageGet } from "./Messages/MessageGet";

export class Chat {
    id?: number;
    name?: string;
    interlocutorId?: number;
    picture?: string;
    numberOfUnreadMessages: number = 0;
    lastMessage?: MessageGet;
    messages: MessageGet[] = [];
}