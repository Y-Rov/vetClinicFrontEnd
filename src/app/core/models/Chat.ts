import { Message } from "./Message";
import { ResourceModel } from "./ResourceModel";

export class Chat extends ResourceModel<Chat>{
    name?: string;
    interlocutorId?: number;
    picture?: string | null| undefined;
    numberOfUnreadMessages: number = 0;
    lastMessage?: Message;
    messages?: Message[];

    constructor(model?: Partial<Chat>) {
        super(model);
    }
}