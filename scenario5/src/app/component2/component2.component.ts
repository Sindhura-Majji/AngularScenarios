import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public greeting;

//Output decorator for childEvent
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  //fireEvent to emit greeting
  fireEvent(){
        this.childEvent.emit(this.greeting);
  }

}
