import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

//Input decorator for parentData
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
