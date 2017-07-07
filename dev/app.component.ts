import {Component} from 'angular2/core';
import {Comp1Component} from "./comp1.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {Comp2Component} from "./comp2.component";


@Component({
    selector: 'my-app',
    template: `
        <h1>This is Main Component</h1>
        <header>
          <nav>
            <a [routerLink]="['FirstPage']">First Page</a>
            <a [routerLink]="['SecondPage']">Second Page</a>
          </nav>
        </header>
        <section>
          <router-outlet></router-outlet>
        </section>
    `,
  directives: [Comp1Component, Comp2Component, ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path: '/page1', name: 'FirstPage', component: Comp1Component, useAsDefault: true},
  {path: '/page2', name: 'SecondPage', component: Comp2Component}
])
export class AppComponent{


}
