import { Component, OnInit } from '@angular/core';
declare const myTest: any;
@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss']
})
export class LeftSectionComponent implements OnInit {

  constructor() { 
    
   
  }

  ngOnInit(): void {
    myTest();
  }

}
