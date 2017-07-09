import {Component, OnInit} from 'angular2/core';
import {ContactSevice} from "./contact.service";
import {Contact} from "./contact";
import {Router, RouteParams} from "angular2/router";

@Component({
  selector: 'comp2',
  template: `
        <h1>This is Second Page</h1>
        <form>
          Name: <input type="text" #nameInput value="{{name}}"/><br>
          Age: <input type="text" #ageInput/><br>
          Phone: <input type="text" #phoneInput/><br>
          Email: <input type="text" #emailInput/><br>
          <button (click)="onAddContact(nameInput.value, ageInput.value, phoneInput.value, emailInput.value)">Submit</button>
        </form>  
    `,
  providers: [ContactSevice]
})
export class Comp2Component implements OnInit{
  public name = "";
  ngOnInit():any {
    this.name = this._routerParams.get('name');
  }
  constructor(private _contactService: ContactSevice, private _router: Router, private _routerParams: RouteParams){}
  onAddContact(nameIn, ageIn, phoneIn, emailIn){
    let contact: Contact = {name: nameIn, age: ageIn, email: phoneIn, phone: emailIn};
    this._contactService.insertContact(contact);
    this._router.navigate(['FirstPage']);
  }
}
