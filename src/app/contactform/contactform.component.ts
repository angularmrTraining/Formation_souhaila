import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators,ReactiveFormsModule} from "@angular/forms";
import {ContactService} from '../contact.service';
import {ActivatedRoute, Router} from '@angular/router'
import {contact} from '../contact/contact'
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
  providers: [ContactService]
})
export class ContactformComponent implements OnInit, OnDestroy {
 

  id : number;
  conTact: contact;
  
  contactForm: FormGroup;

  private sub: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private contactService : ContactService) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
      ]),
      persPhone: new FormControl('', Validators.required),
      proPhone: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });

    if (this.id) { //edit form
      this.contactService.findById(this.id).subscribe(
        conTact => {
            this.id = conTact.id;
            this.contactForm.patchValue({
            firstName: conTact.firstName,
            lastName: conTact.lastName,
            fullName: conTact.fullName,
            email: conTact.email,
            persoPhone : conTact.persoPhone,
            proPhone : conTact.proPhone,
            gender : conTact.gender,
            age : conTact.age


          });
         },error => {
          console.log(error);
         }
      );
 
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit(){

    let fullName : string = this.contactForm.controls['firstName'].value +" "+this.contactForm.controls['lastName'].value;
    let conTact: contact = new contact(null,
    this.contactForm.controls['firstName'].value,
    this.contactForm.controls['lastName'].value,
    fullName,
    this.contactForm.controls['email'].value,
    this.contactForm.controls['persoPhone'].value,
    this.contactForm.controls['proPhone'].value,
    this.contactForm.controls['gender'].value,
    this.contactForm.controls['age'].value);
    this.contactService.saveContact(conTact).subscribe();
    this.contactForm.reset();
    this.router.navigate(['']);
  }

}
