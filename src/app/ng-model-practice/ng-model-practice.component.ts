import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-practice',
  templateUrl: './ng-model-practice.component.html',
  styleUrls: ['./ng-model-practice.component.css']
})
export class NgModelPracticeComponent implements OnInit {

  constructor() { }
  onWayBinding = "Helllo K"     //one way binding
  public isDisable:boolean = false;   //one way binding

  public name = ""    //two way binding
  ngOnInit(): void {
  }

  onChange(){
    alert("Hello This is Event Binding")
  }

}
