import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

//Output decorator for to display data from childEvent
    @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  //fireEvent to input text to display
  fireEvent(){
  this.childEvent.emit("Hello Sindhu");
  }

}
