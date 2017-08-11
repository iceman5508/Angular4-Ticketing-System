import { Injectable } from '@angular/core';
import {Tickets} from './tickets';
import {Notes} from './notes';

@Injectable()
export class TicketsService {

  private tickets: Tickets[] = [
      new Tickets(1, 'Andy', 'Registrar - Admission Paperwork',
          'Hello I cannot seem to find the required document for registering'
      , 'Admissions Faq', 'Admissions', '7-20-2017', 'andy@fakeEmail.com', 'closed', '7-23-2017', 'Andy' ),

    new Tickets(2, 'Danny', 'Billing Questions - Billing Questions',
        'I am being charged although my balance due is 0 dollars'
        , 'Billing Faq', 'Financial aid', '7-24-2017', 'Danny@fakeEmail.com', 'closed', '7-25-2017', 'John'),

    new Tickets(3, 'Isaac', 'Reports - down', 'Hi guys reports are down again!...my inner danny tells me it is noc',
        'Auto', 'Campus Admin', '7-30-2017', 'Isaac@fakeEmail.com', 'open', 'N/A', 'N/A'),

    new Tickets(4, 'John', ' Danny Gossip', 'Guy perhaps danny is secretly kevin Love!..at least that is what i heard'
        , 'Weekly Gossip', 'All Campus', '7-31-2017', 'andy@fakeEmail.com', 'open', 'N/A', 'N/A'),
  ];


  public getTickets(): Tickets[] {
      return this.tickets;
  }


  public deleteTicket(ticket: Tickets) {
      const index = this.tickets.indexOf(ticket);
      this.tickets.splice(index, 1);
  }

  public makeTicket(ticket: Tickets) {
    this.tickets.unshift(ticket);
  }

  public closeTicket(ticket: Tickets) {
      const index = this.tickets.indexOf(ticket);
     this.tickets[index].status = 'closed';
     this.tickets[index].closedDate = Date() ;
     this.tickets[index].closedBy = 'Isaac';
  }

  public assignTicket(ticket: Tickets, department: string, agent: string ) {
      const index = this.tickets.indexOf(ticket);
      this.tickets[index].department = department;
      this.tickets[index].assigenedTo = agent;
  }


  public addNote(ticket: Tickets, body: string) {
            const index = this.tickets.indexOf(ticket);
            const id = this.tickets[index].notes.length + 1;
            this.tickets[index].notes.unshift(new Notes(id, index,  'Isaac', body));
  }

}
