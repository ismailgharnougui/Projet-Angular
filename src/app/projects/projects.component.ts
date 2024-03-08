import {Component, OnInit} from '@angular/core';
import {ConsumerProjectService} from "../service/consumer-project.service";
import {Project} from "../model/Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  implements  OnInit{
  constructor(private consP:ConsumerProjectService ){}
  listProject:Project[]=[]
  ngOnInit(){
    this.consP.getProject().subscribe((data)=>this.listProject=data)
  }
}
