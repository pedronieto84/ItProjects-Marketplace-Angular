import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewProjectService } from '../../../services/new-project.service';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  @Output() sendValidation = new EventEmitter<Boolean>();

  @ViewChild('projectTitle') projectTitle: ElementRef;
  @ViewChild('projectShortExplanation') projectShortExplanation: ElementRef;

  newProject:any;
  subscription: Subscription;
  isValid: boolean = false;

  checkValid() {
    const asTitle = this.projectTitle.nativeElement;
    const asProjectShortExplanation = this.projectShortExplanation.nativeElement;
    if(this.newProject.title !== "") {
      this.renderer2.addClass(asTitle, "is-valid");
      if(this.newProject.shortExplanation !== "") {
        this.renderer2.addClass(asProjectShortExplanation, "is-valid");
        this.isValid = true;
        this.sendValidation.emit(this.isValid);
      } else {
        this.renderer2.removeClass(asProjectShortExplanation, "is-valid");
        this.isValid = false;
        this.sendValidation.emit(this.isValid);
      }
    } else {
      this.renderer2.removeClass(asTitle, "is-valid");
      this.isValid = false;
      this.sendValidation.emit(this.isValid);
    }
  }

  constructor(
              private element: ElementRef, 
              private renderer2: Renderer2, 
              private data: NewProjectService
            ) { }

  ngOnInit(): void {
    this.subscription = this.data.currentProject$.subscribe(newProject => this.newProject = newProject);
    //this.checkValid();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeProjectProperty(property: string, newValue: any) {
    this.data.changeProjectProperty(property, newValue);
  }

}

