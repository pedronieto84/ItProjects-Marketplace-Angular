import { Component, ElementRef, OnInit, Renderer2, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-techset',
  templateUrl: './techset.component.html',
  styleUrls: ['./techset.component.scss']
})
export class TechsetComponent implements OnInit {
  
  @ViewChild("tagContainer") tagContainer: ElementRef;

  @Output() sendTechSet = new EventEmitter<object>();

  newLabel: string = "";
  techList: string[] = [];

  addTechSet(techList: object) {
    this.sendTechSet.emit(techList);
    console.log("addTechSet ",techList);
  }

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  createTag() {
    
    // Check if tech is already in the list or empty
    if (!this.techList.indexOf(this.newLabel) || this.newLabel !== "") {
      // Push tech to techList
      this.techList.push(this.newLabel);
      
      // Clear Input field
      this.newLabel = "";
    }
  }

  deleteTag(e: Event) {
    
    let techLabel: HTMLElement = (<HTMLElement>e.target).parentElement;
    let index:number = this.techList.indexOf(techLabel.id);

    this.techList.splice(index,1);
    techLabel.remove();
    console.log(this.techList);
    
  }

  // Comprobar que una tag no está ya en la lista
  // crear array con lista de tags




}
