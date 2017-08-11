export class Notes {
    public id: number;
    public ticketId: number;
    public sonisId: string;
    public body: string;
    public createdDate: string;

    constructor(id: number, ticketId: number, sonisId: string, body: string) {
        this.id = id;
        this.ticketId = ticketId;
        this.sonisId = sonisId;
        this.body = body;
        this.createdDate = Date();
    }
}
