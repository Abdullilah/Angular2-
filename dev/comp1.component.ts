import {Component} from 'angular2/core';
import {Contact} from "./contact";
import {ContactSevice} from "./contact.service";

@Component({
  selector: 'comp1',
  template: `
        <h1>This is First Page</h1>
        <div>
          <ul>
            <li *ngFor="#obj of contacts">
              <div [class.activatedEle]="obj === selectedItem">Name: {{obj.name}}</div>
              <div>Age: {{obj.age}}</div>
              <div>Email: {{obj.email}}</div>
              <div>Phone: {{obj.phone}}</div>
            </li>
          </ul>
        </div>
    `,
  providers: [ContactSevice]
})
export class Comp1Component {
  public contacts: Contact[];
  constructor(private _contactService: ContactSevice){}
  ngOnInit():any {
    this.getContacts();
  }

  getContacts(){
    this._contactService.getContact().then((contacts: Contact[])=> this.contacts = contacts);
  }
}
