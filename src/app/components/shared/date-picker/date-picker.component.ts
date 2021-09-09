import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewProjectService } from '../../../services/new-project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Output() sendProjectDate = new EventEmitter<Date>();
  
  newProjectDate: Date;
  
  
  addProjectDate(newProjectDate: Date) {
    this.sendProjectDate.emit(newProjectDate);
  }

  constructor(private data: NewProjectService) { }

  ngOnInit(): void {}

}
