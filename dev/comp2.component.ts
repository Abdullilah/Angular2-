import {Component, OnInit} from 'angular2/core';
import {Contact} from "./contact";
import {ContactSevice} from "./contact.service";
import {Router} from "angular2/router";

@Component({
  selector: 'comp2',
  template: `
        <h1>This is Second Component</h1>
        <ul>
          <li *ngFor="#obj of contacts">
            <div>{{obj.name}}</div>
          </li>
        </ul>
    `,
})
export class Comp2Component implements OnInit{
  public contacts: Contact[];
  constructor(private _contactService: ContactSevice){}
  ngOnInit():any {
    this.getContacts();
  }
  getContacts(){
    this._contactService.getContact().then((contacts: Contact[])=> this.contacts = contacts);
  }

}
