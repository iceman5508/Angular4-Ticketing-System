import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import {TicketsService} from './tickets.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTicketsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
