import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {contact} from '../contact/contact';
import {Router} from '@angular/router'

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css'],
  providers:[ContactService]
})
export class ContactslistComponent implements OnInit {

  contacts = [];
  constructor(private router: Router,private contactService : ContactService) { }

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.findAll().subscribe(
      contacts => {
        this.contacts = contacts;
      },
      err => {
        console.log(err);
      }
 
    );
  }

  editContact(conTact: contact) {
    if (conTact) {
      this.router.navigate(['/contact/update', conTact.id]);
    }
  }

   deleteContact(conTact: contact) {
      if (conTact) {
        this.contactService.deleteContactById(conTact.id).subscribe(
          res => {
            this.getAllContacts();
            this.router.navigate(['']);
            console.log('done');
          }
        );
      }
    }
}
