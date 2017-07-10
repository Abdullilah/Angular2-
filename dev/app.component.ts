import {Component, OnInit} from 'angular2/core';
import {Comp1Component} from "./comp1.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {Comp2Component} from "./comp2.component";
import {Contact} from "./contact";
import {ContactSevice} from "./contact.service";


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
        <div>
          <h1>Pipes:</h1>
          <p>{{newName | uppercase}}</p>
          <p>{{newName | lowercase}}</p>
          <p>{{date | date}}</p>
          <p>{{date | date: 'y-m-d'}}</p>
          <p>{{date | date: 'short'}}</p>
          <p>{{date | date: 'fullDate'}}</p>
          <p>{{15.32 | number: '1.2-4'}}</p> <!-- 1.nim-max -->
          <p>{{15.32 | number: '1.4-4'}}</p> <!-- 1.nim-max -->
          <p>{{15.32 | currency}}</p>
          <p>{{15.32 | currency: 'USD'}}</p>
          <p>{{15.32 | currency: 'EUR'}}</p>
          <p>{{15.32 | currency: 'USD': true}}</p>
          <p>{{15.32 | currency: 'USD': true: '1.4-4'}}</p>
          <!-- Stateful pipe: wait till something happend and then do it -->
          <p>{{randomData | async}}</p>
        </div>
    `,
  directives: [Comp1Component, Comp2Component, ROUTER_DIRECTIVES],
  styleUrls: ['../css/style.css']
})

@RouteConfig([
  {path: '/page1', name: 'FirstPage', component: Comp1Component, useAsDefault: true},
  {path: '/page2', name: 'SecondPage', component: Comp2Component}
])
export class AppComponent{
  public newName = "Abdullilah";
  date = new Date();
  randomData = new Promise((resolve, reject) => {
    setTimeout(()=>resolve("Random Data!"), 3000)
  });
}

