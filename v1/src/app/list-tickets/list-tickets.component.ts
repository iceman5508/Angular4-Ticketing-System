import { Component, Input, OnInit } from '@angular/core';
import {Tickets} from '../tickets';
import {TicketsService} from '../tickets.service';
import {Agents} from '../agents';




@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements  OnInit {

  @Input() ticketList: Tickets[];
  public currentTicket: Tickets;
  public makeTicket = {
    id: 0,
    sonis: 'Isaac',
    category: 'Test',
    department: 'Test Department',
    datecreated: Date(),
    status: 'open',
    dateclosed: 'N/A',
    closedby: 'N/A',
    title: '',
    email: '',
    body: ''
  };
  public deptInd = 0;
  public Agents = Agents;
  public Assign = { dept: this.Agents.department[0], agent: this.Agents.agent[0][0]};
  public addNote = false;
  public Note = { body: ''};
  public filterdTickets: Tickets[] = [];
  public state = 1;





  viewTicket(ticket: Tickets) {
    // Get the modal
    this.currentTicket = ticket;
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  closeView(viewName: string, open = '') {
    if (open.trim().length > 0) {
      this.View(open);
    }
    const modal = document.getElementById(viewName);
    modal.style.display = 'none';
    this.makeTicket.title = '';
    this.makeTicket.body = '';
    this.makeTicket.email = '';
  }


  deleteTicket() {
    this.closeView('myModal');
    this.ts.deleteTicket(this.currentTicket);
    this.ticketList = this.ts.getTickets();
    this.currentTicket = null;
    this.runFilter();

  }

  closeTicket() {
      this.closeView('myModal');
      this.ts.closeTicket(this.currentTicket);
      this.ticketList = this.ts.getTickets();
      this.runFilter();


  }

  View(viewName: string, close = '') {
    if (close.trim().length > 0) {
      this.closeView(close);
    }
    const modal = document.getElementById(viewName);
    modal.style.display = 'block';
  }


  public allFieldsFilled(): boolean {
    if ( this.makeTicket.title.trim().length > 0) {
      if ( this.makeTicket.email.trim().length > 0) {
        if ( this.makeTicket.body.trim().length > 0) {
            return false;
        }
      }
    }
    return true;
}


  public createTicket() {


    this.makeTicket.id = this.ticketList.length + 1;
    const tempTicket = new Tickets(
        this.makeTicket.id,
        this.makeTicket.sonis,
        this.makeTicket.title,
        this.makeTicket.body,
        this.makeTicket.category,
        this.makeTicket.department,
        this.makeTicket.datecreated,
        this.makeTicket.email,
        this.makeTicket.status,
        this.makeTicket.dateclosed,
        this.makeTicket.closedby
    );


    this.currentTicket = null;
    this.ts.makeTicket(tempTicket);
    this.ticketList = this.ts.getTickets();
    this.runFilter();
    this.closeView('createView');
 }


  public onDeptChange(deviceValue) {
      this.deptInd = this.Agents.department.indexOf(deviceValue);
      this.Assign.dept = deviceValue;
  }

  public onAgeChange(deviceValue) {
     this.Assign.agent = deviceValue;
  }

  public assignAgent() {
    this.ts.assignTicket(this.currentTicket, this.Assign.dept, this.Assign.agent);
    this.ticketList = this.ts.getTickets();
    this.closeView('assignView', 'myModal');

  }


  public createNote() {
    this.ts.addNote(this.currentTicket, this.Note.body);
    this.Note.body = '';
    this.ticketList = this.ts.getTickets();

  }

  public allTickets() {
    this.filterdTickets = this.ticketList;
  }

  public openTickets() {
    this.filterdTickets = [];
    for (let ticket of this.ticketList) {
      if (ticket.status === 'open') {
        this.filterdTickets.push(ticket);
      }

    }
  }

  public closedTickets() {
    this.filterdTickets = [];
    for (let ticket of this.ticketList) {
      if (ticket.status === 'closed') {
        this.filterdTickets.push(ticket);
      }

    }
  }


  constructor(private ts: TicketsService) {


  }


  ngOnInit() {
    this.filterdTickets = this.ticketList;

  }

  private runFilter() {
    if (this.state === 1) {
        this.allTickets();
    }else
    if (this.state === 2) {
      this.openTickets();
    }else
    if (this.state === 3) {
        this.closedTickets();
    }
  }


}
