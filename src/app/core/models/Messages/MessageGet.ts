export class MessageGet {
    id?: number;
    text?: string;
    sentAt?: Date;
    senderId?: number;
    senderName?: string;
    chatRoomId?: number

    // create directly on client side
    constructor(text: string, senderId: number, chatRoomId: number) {
        this.text = text;
        this.sentAt = new Date();
        this.senderId = senderId;
        this.chatRoomId = chatRoomId;
    }
}