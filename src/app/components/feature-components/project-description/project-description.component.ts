import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { NewProjectService } from '../../../services/new-project.service';

@Component({
  selector:   'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  @Output() checkChange = new EventEmitter<any>();

  newProject:any;
  subscription: Subscription;
  className: string;
  textField: string;
  @Input() isTitleValid: any;
  @Input() isDescriptionValid: any;

  /*

  <input 
            #projectTitle
            type="text" 
            [ngModel]="newProject.title"
            (ngModelChange)="metodoCreadoPorPedro($event)"
            [class]="newProject?.title?.length > 0 ? 'is-valid form-control' : 'form-control'" 
            (keyup)="[changeProjectProperty('title', $event.target.value)]"
            value="{{newProject.title}}">

  metodoCreadoPorPedro(ev){
   if(this.newProject && this.newProject.title ){ 
    this.sendValidation.emit( this.newProject.title.length >0 ? true : false);
    }
  }
  */

  changeDetected() {
    this.checkChange.emit();
  }

  constructor(private data: NewProjectService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentProject$.subscribe(newProject => this.newProject = newProject);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeProjectProperty(property: string, newValue: any) {
    this.data.changeProjectProperty(property, newValue);
  }

}

