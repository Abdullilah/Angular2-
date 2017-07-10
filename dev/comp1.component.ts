import {Component, OnInit} from 'angular2/core';
import {Contact} from "./contact";
import {ContactSevice} from "./contact.service";
import {Router} from "angular2/router";

@Component({
  selector: 'comp1',
  template: `
        <h1>This is First Component</h1>
        <ul>
          <li *ngFor="#obj of contacts">
            <div>{{obj.name}}</div>
          </li>
        </ul>
        <input type="text" #nameInput/>
        <button (click)="addItem(nameInput.value)">Add</button>
    `,
})
export class Comp1Component implements OnInit{
  public contacts: Contact[];
  constructor(private _contactService: ContactSevice){}
  ngOnInit():any {
    this.getContacts();
  }
  getContacts() {
    this._contactService.getContact().then((contacts:Contact[])=> this.contacts = contacts);
  }
  addItem(newName){
    this._contactService.insertContact({name: newName, age: "", phone: "", email: ""})
  }
}
