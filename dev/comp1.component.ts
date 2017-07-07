import {Component, Input} from 'angular2/core';

@Component({
  selector: 'comp1',
  template: `
        <h1>This is sub component</h1>
        <h3>Here are the data, called from the main cmoponent</h3>
        
        <ul>
          <li *ngFor="#obj of contacts" (click)="eleClicked(obj)">
            <div [class.activatedEle]="obj === selectedItem">Name: {{obj.name}}</div>
            <div>Age: {{obj.age}}</div>
            <div>Email: {{obj.email}}</div>
            <div>Phone: {{obj.phone}}</div>
          </li>
        </ul>
        <div *ngIf="status">
          <span>Email: </span><input type="text" [(ngModel)]="selectedItem.email">
          <span>phone: </span><input type="text" [(ngModel)]="selectedItem.phone">
        </div>
    `,
  styleUrls: ['../css/style.css']
})
export class Comp1Component {
  @Input() contacts : Array<{name: string, age: string, email: string, phone: string}> = [];
  public status = false;
  public selectedItem : {};
  eleClicked(objectSel : {}){
    this.selectedItem = objectSel;
    this.status = true;
  }
}
