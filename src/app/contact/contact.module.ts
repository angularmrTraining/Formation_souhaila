import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { ContactformComponent } from '../contactform/contactform.component';
import { ContactslistComponent } from '../contactslist/contactslist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactformComponent,ContactslistComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
