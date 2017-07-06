import {Component} from 'angular2/core';
import {Comp1Component} from "./comp1.component";


@Component({
    selector: 'my-app',
    template: `
        <h1>This is the main component</h1>
        <h2>This value is a variable from the main Comp: <span class="active">{{newVar}}</span></h2>
        <comp1 [info]=info></comp1>
    `,
  directives: [Comp1Component],
  styleUrls: ['../css/style.css']
})
export class AppComponent {
  public newVar = "Main variable";
  public info = [
    {name: 'Abdo', age: '25', email: 'abdo@gmail.com', phone: '123456'},
    {name: 'Said', age: '23', email: 'said@gmail.com', phone: '135724'},
    {name: 'Gazi', age: '32', email: 'gazi@gmail.com', phone: '123321'}
  ];
}
