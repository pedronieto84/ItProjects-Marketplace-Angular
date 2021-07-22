import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techset',
  templateUrl: './techset.component.html',
  styleUrls: ['./techset.component.scss']
})
export class TechsetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

createTag(label: string) {
    const div = document.createElement("div");
    div.setAttribute("class", "tag d-flex align-items-center p-2");

    const span = document.createElement("span");
    span.setAttribute("class", "border shadow-sm p-1")
    span.innerHTML = label;

    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "bi bi-dash-circle-fill mx-1");

    div.appendChild(span);
    div.appendChild(closeBtn);
    
  }

  

}
