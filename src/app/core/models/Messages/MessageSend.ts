export class MessageSend {
    text?: string
    receiverId?: number

    /**
     *
     */
    constructor(text: string, receiverId: number) {
        this.text = text;
        this.receiverId = receiverId;
    }
}