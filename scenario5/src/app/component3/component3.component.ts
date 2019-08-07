import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

//Output decorator for childEvent
 @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  // fireEvent to emit a message
   fireEvent(){
    this.childEvent.emit("Hello Sindhu");
    }

}
