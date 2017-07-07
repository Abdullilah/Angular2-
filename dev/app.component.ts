import {Component, OnInit} from 'angular2/core';
import {Comp1Component} from "./comp1.component";
import {ContactSevice} from "./contact.service";
import {Contact} from "./contact";


@Component({
    selector: 'my-app',
    template: `
        <comp1 [contacts]=contacts></comp1>
    `,
  directives: [Comp1Component],
  providers: [ContactSevice],
  styleUrls: ['../css/style.css']
})
export class AppComponent implements OnInit{
  public contacts: Contact[];
  constructor(private _contactService: ContactSevice){}
  ngOnInit():any {
    this.getContacts();
  }

  getContacts(){
    this._contactService.getContact().then((contacts: Contact[])=> this.contacts = contacts);
  }

}
