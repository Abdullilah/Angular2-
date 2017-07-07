import {Component, OnInit} from 'angular2/core';
import {Comp1Component} from "./comp1.component";


@Component({
    selector: 'my-app',
    template: `
        <h1>This is the <span [class.activated]="inputValue.value === 'yes'">main component</span></h1>
        <h2>This value is a variable from the main Comp: <span class="activated">{{newVar}}</span></h2>
        <span>Is it good: </span><input type="text" #inputValue (keyup)="0">
        <h3>{{anotherVar}}</h3>
        <button [disabled]="inputValue.value !== 'yes'">Angular2 Disabled</button>
        <comp1 [info]=info></comp1>
    `,
  directives: [Comp1Component],
  styleUrls: ['../css/style.css']
})
export class AppComponent implements OnInit{

  public newVar = "Main variable";
  public anotherVar : string;
  // constructor(){
  //   this.anotherVar = "Initial Variable";
  // }
  ngOnInit():any {
    this.anotherVar = "Initial Variable";
  }

  public info = [
    {name: 'Abdo', age: '25', email: 'abdo@gmail.com', phone: '123456'},
    {name: 'Said', age: '23', email: 'said@gmail.com', phone: '135724'},
    {name: 'Gazi', age: '32', email: 'gazi@gmail.com', phone: '123321'}
  ];
}
