import {Component, OnInit} from 'angular2/core';
import {Contact} from "./contact";
import {ContactSevice} from "./contact.service";
import {Router} from "angular2/router";

@Component({
  selector: 'comp1',
  template: `
        <h1>This is First Page</h1>
        <ul>
          <li *ngFor="#obj of contacts">
            <div [class.activatedEle]="obj === selectedItem" 
                 (click)="selectedItemFun(obj)">Name: {{obj.name}}</div>
            <div>Age: {{obj.age}}</div>
            <div>Email: {{obj.email}}</div>
            <div>Phone: {{obj.phone}}</div>
          </li>
        </ul>
        <button *ngIf="status" (click)="btnClicked()">Modify information</button>
    `,
  providers: [ContactSevice],
  styleUrls: ['../css/style.css']
})
export class Comp1Component implements OnInit{
  public contacts: Contact[];
  public selectedItem: Contact;
  public status= false;
  constructor(private _contactService: ContactSevice, private _router: Router){}
  ngOnInit():any {
    this.getContacts();
  }
  getContacts(){
    this._contactService.getContact().then((contacts: Contact[])=> this.contacts = contacts);
  }
  selectedItemFun(_selectedItem){
    this.selectedItem = _selectedItem;
    this.status = true;
  }
  btnClicked(){
    this._router.navigate(['SecondPage', {name: this.selectedItem.name}]);
  }
}
