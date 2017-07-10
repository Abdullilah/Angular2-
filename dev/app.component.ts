import {Component} from 'angular2/core';
import {ChildComponent} from "./child.component";

@Component({
    selector: 'my-app',
    template: `
        <div class="parent">
          <h1>The Parent Component</h1>
          <p>This text from the Child Component: {{myChildVal}}</p>
          <input type="text" #parentInput (keyup)="0"/><br>
          <childComp [parentValue]="parentInput.value" (childValue)="myChildVal=$event"></childComp>
        </div>
    `,
  directives: [ChildComponent],
  styles: [`.parent{border: 1px solid green; background-color: #d7d7d7; padding: 20px;}
            childComp{border: 1px solid blue; background-color: #FFFF88; padding: 20px; display: block; margin: 10px;}`]
})

export class AppComponent{
  myChildVal: string;
}

