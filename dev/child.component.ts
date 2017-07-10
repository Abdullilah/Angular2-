import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'childComp',
  template: `
        <h2>This is the Child Component</h2>
        <p>This text from the Parent Component: {{parentValue}}</p>
        <input type="text" #childInput (keyup)="onChange(childInput.value)"/>
    `,
  inputs: ['parentValue'],
  outputs: ['childValue']
})

export class ChildComponent{
  parentValue: string;
  childValue = new EventEmitter<string>();
  onChange(value: string){
    this.childValue.emit(value);
  }
}

