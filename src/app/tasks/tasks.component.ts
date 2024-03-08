import { Component } from '@angular/core';
import {ConsumerProjectService} from "../service/consumer-project.service";
import {Project} from "../model/Project";
import {Task} from "../model/Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(private consP:ConsumerProjectService ){}
  listTask:Task[]=[]
  ngOnInit(){
    this.consP.getTask().subscribe((data)=>this.listTask=data)
  }
  delete(id: number) {
    this.consP.deleteTask(id).subscribe(() => this.ngOnInit())
  }
}
