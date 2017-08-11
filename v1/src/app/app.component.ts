import {Component, OnInit} from '@angular/core';
import {TicketsService} from './tickets.service';
import {Tickets} from './tickets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public tickets: Tickets[];

  constructor(private ts: TicketsService) {

  }


  ngOnInit() {
    this.tickets = this.ts.getTickets();
  }





}
