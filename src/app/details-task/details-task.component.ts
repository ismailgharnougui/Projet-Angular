import {Component, OnInit} from '@angular/core';
import {Task} from "../model/Task";
import {ActivatedRoute} from "@angular/router";
import {ConsumerProjectService} from "../service/consumer-project.service";

@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})
export class DetailsTaskComponent implements OnInit{
  id!:number;
  p!:Task

  constructor(private Act:ActivatedRoute,private ps:ConsumerProjectService) { }

  ngOnInit() {
    this.id = this.Act.snapshot.params['id']
    this.ps.getTaskById(this.id).subscribe((data)=>this.p=data)
  }

}
