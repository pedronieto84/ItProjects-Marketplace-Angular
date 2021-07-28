import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Output() sendProjectDate = new EventEmitter<Date>();

  addProjectDate(newProjectDate: Date) {
    this.sendProjectDate.emit(newProjectDate);
    console.log(newProjectDate);
  }

  newProjectDate: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
