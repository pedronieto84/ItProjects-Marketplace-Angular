import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../../../interfaces/interfaces';
import { NewProjectService } from '../../../services/new-project.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  resetVar: any ;

  newProject: Project;
  subscription: Subscription;

  docUpload($event) {
    this.newProject.filesArray.push();
  }


  afuConfig = {
    multiple: false,
    formatsAllowed: "pdf, png, jpg",
    maxSize: "100",
    uploadAPI:  {
      url:"-",
      method:"POST",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8",
     "Authorization" : `Bearer ${"token"}`
      },
      params: {
        'page': '1'
      },
      responseType: 'blob',
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
    fileNameIndex: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

  constructor(private data: NewProjectService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentProject$.subscribe(newProject => this.newProject = newProject as any);
  }

}
