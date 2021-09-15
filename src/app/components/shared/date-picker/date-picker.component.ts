import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewProjectService } from '../../../services/new-project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() showDate: Date;

  @Output() sendProjectDate = new EventEmitter<Date>();
  
  newProject: any;
  
  addProjectDate(date: Date) {
    this.sendProjectDate.emit(date);
  }

  constructor() {}

  ngOnInit(): void {
  }

}
