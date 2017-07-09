import {Component, OnInit} from 'angular2/core';
import {ContactSevice} from "./contact.service";
import {Contact} from "./contact";
import {Router, RouteParams} from "angular2/router";

@Component({
  selector: 'comp2',
  template: `
        <h1>This is Second Page</h1>
        <form #myForm="ngForm" (ngSubmit)="onSubmit()">
          <div>
            <label>Name:</label>
            <input type="text" ngControl="nameCtrl" [(ngModel)]="newContact.name" required #nameCtrl="ngForm"/>
            <span *ngIf="!nameCtrl.valid">Not Valid</span>
          </div>
          <div>
            <label>Age:</label>
            <input type="text" ngControl="ageCtrl" [(ngModel)]="newContact.age" required #ageCtrl="ngForm"/>
            <span *ngIf="!ageCtrl.valid">Not Valid</span>
          </div>
          <div>
            <label>Phone:</label>
            <input type="text" ngControl="phoneCtrl" [(ngModel)]="newContact.phone" required #phoneCtrl="ngForm"/>
            <span *ngIf="!phoneCtrl.valid">Not Valid</span><br>
          </div>
          <div>
            <label>Email:</label>
            <input type="text" ngControl="emailCtrl" [(ngModel)]="newContact.email" required #emailCtrl="ngForm"/>
            <span *ngIf="!emailCtrl.valid">Not Valid</span><br>
          </div>
          <button type="submit" [disabled]="!myForm.form.valid">Submit</button>
        </form>  
    `,
  providers: [ContactSevice],
  styles: [`label{ width: 65px;  display: inline-block;} 
            input{ margin-right: 7px; margin-bottom: 7px;}
            span{color: red}
            .ng-invalid{border: 1px solid red;}`]
})
export class Comp2Component implements OnInit{
  public newContact: Contact;
  ngOnInit():any {
    this.newContact = {name: this._routerParams.get('name'), age: '', phone: '', email:''};
  }
  constructor(private _contactService: ContactSevice, private _router: Router, private _routerParams: RouteParams){}

  onSubmit(){
    this._contactService.insertContact(this.newContact);
    this._router.navigate(['FirstPage']);
  }
}
