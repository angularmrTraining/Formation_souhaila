import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ContactService} from './contact.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactslistComponent } from './contactslist/contactslist.component';
import { MenuComponent } from './menu/menu.component';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactformComponent,
    ContactslistComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
