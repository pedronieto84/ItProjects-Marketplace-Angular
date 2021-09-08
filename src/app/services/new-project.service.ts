import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewProjectService {

  project = {
    projectId: '',
    title : '',
    shortExplanation : '',
    ownerId : '',
    publishedDate : new Date(2015, 7, 12),
    deadlineDate : new Date(),
    techSet : [],
    filesArray : [],
    bid: 0,
    state : {
      id : '',
      name : ''
    }
    }

  private newProjectSource = new BehaviorSubject<Object>({});

  currentProject$ = this.newProjectSource.asObservable();

  constructor() { }

  changeProjectProperty(property: string, value: any) {
    this.project[property] = value;
    this.newProjectSource.next(this.project);
    console.log(this.project);
  }
}
