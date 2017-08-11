import {Notes} from './notes';
export class Tickets {

    public id: number;
    public sonisId: string;
    public category: string;
    public department: string;
    public closedBy: string;
    public authorEmail: string;
    public title: string;
    public body: string;
    public status: string;
    public createdDate: any;
    public closedDate: any;
    public notes: Notes[] = [];
    public assigenedTo: string;

    constructor(id: number, sonis: string, title: string, body: string, category: string, department: string,
                datecreated: string, email: string, status: string, dateclosed: string, closedby: string ) {
        this.id = id;
        this.sonisId = sonis;
        this.category = category;
        this.department = department;
        this.title = title;
        this.createdDate = datecreated;
        this.authorEmail = email;
        this.status = status;
        this.closedDate = dateclosed;
        this.closedBy = closedby;
        this.body = body;

    }

}
