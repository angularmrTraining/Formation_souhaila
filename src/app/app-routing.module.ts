import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactformComponent } from './contactform/contactform.component';
import { AboutComponent } from './about/about.component';
import { ContactslistComponent } from './contactslist/contactslist.component';

const routes: Routes = [

  {
    path: '',
    component: ContactslistComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact/add',
    component: ContactformComponent
  },
  {
    path: 'contact/update/:id',
    component: ContactformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
