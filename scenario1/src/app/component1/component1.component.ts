import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // To display input text in console
logMessage(value){
console.log(value);
}

}
