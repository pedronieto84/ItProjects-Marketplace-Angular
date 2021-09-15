import { Component, Input, OnInit, Renderer2, ViewChild, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewProjectService } from '../../../services/new-project.service';


@Component({
  selector: 'app-techset',
  templateUrl: './techset.component.html',
  styleUrls: ['./techset.component.scss']
})
export class TechsetComponent implements OnInit {
  
  @Output() checkChangeTechSet = new EventEmitter<any>();

  @Input() isTechSetValid: boolean;

  subscription: Subscription;

  newProject:any;
  newLabel: string = "";
  techList: string[] = [];

  constructor(private renderer:Renderer2, private data: NewProjectService) { }

  techSetChanged() {
    this.checkChangeTechSet.emit();
    console.log("change detected")
  }

  ngOnInit(): void {
    this.subscription = this.data.currentProject$.subscribe(newProject => this.newProject = newProject);
    if (typeof this.newProject.techSet === "undefined") {
      this.techList = [];
    } else {
      this.techList = this.newProject.techSet;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeProjectProperty(property: string, newValue: any) {
    this.data.changeProjectProperty(property, newValue);
  }

  createTag() {
    // Check if tech is already in the Set or empty
    if (!this.techList.indexOf(this.newLabel) || this.newLabel !== "") {
      // Push tech to techSet
      this.techList.push(this.newLabel);
      // Clear Input field
      this.newLabel = "";
      // Change newProject techSet Array
      this.changeProjectProperty('techSet', this.techList);
    }
  }

  deleteTag(e: Event) {
    console.log(this.techList);
    let techLabel: string = (<HTMLElement>e.target).parentElement.id;
    
    let index:number = this.techList.indexOf(techLabel);
    
    this.techList.splice(index,1);
    this.changeProjectProperty('techSet', this.techList);
  }

}
