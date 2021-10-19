import { Component, OnInit } from '@angular/core';

//Importamos servicios
import { ApiService } from '../../services/api.service';

//Importamos interfices
import { Project } from '../../interfaces/interfaces';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  
  userId:string;
  projectId:string;
  currentProject:any;


  constructor( private apiService: ApiService) { }

  getProyectId () {

    this.userId = "WUnYiEbXKkLhG2FptA1p";
    this.projectId = "sadñfkjslfkja";

    this.apiService.getProject(this.projectId,this.userId).subscribe((res)=> {
      this.currentProject = res;
    })
  }
  ngOnInit() {
    console.log(this.getProyectId)

  }



}
