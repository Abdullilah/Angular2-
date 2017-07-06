import {Component, Input} from 'angular2/core';

@Component({
  selector: 'comp1',
  template: `
        <h1>This is sub component</h1>
        <h3>Here are the data, called from the main cmoponent</h3>
        
        <ul>
          <li *ngFor="#obj of info">
            <div>Name: {{obj.name}}</div>
            <div>Age: {{obj.age}}</div>
          </li>
        </ul>
    `
})
export class Comp1Component {
  @Input() info : Array<{name: string, age: string, email: string, phone: string}> = [];
}
