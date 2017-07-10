import {Component} from 'angular2/core';
import {Comp1Component} from "./comp1.component";
import {Comp2Component} from "./comp2.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Main Component</h1>
        <comp1></comp1>
        <comp2></comp2>
    `,
    directives: [Comp1Component, Comp2Component]
})

export class AppComponent{
}

