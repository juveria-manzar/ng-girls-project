import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title="hello world"
  @Output() submit: EventEmitter<string> = new EventEmitter();
  constructor() { 
  this.changeTitle('My First Angular App');
}

  ngOnInit() {
    this.title = 'Angular CLI Rules!';
  }
  changeTitle(newTitle: string) {
  this.submit.emit(newTitle);
  }
  submitValue(newTitle: string) {
  this.submit.emit(newTitle);
  }
}