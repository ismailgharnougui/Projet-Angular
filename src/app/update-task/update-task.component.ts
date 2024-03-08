import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConsumerProjectService} from "../service/consumer-project.service";
import {Task} from "../model/Task";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {

  constructor(private route:Router,private consP:ConsumerProjectService,private Act:ActivatedRoute){}

  addForm!:FormGroup;
  id!:number;
  p!:Task;
  ngOnInit() {
    this.addForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      dateD: new FormControl(''),
      dateF: new FormControl(''),
      status:new FormControl('')
    });

    //1 recuper l'id depuis l'url
    this.id=this.Act.snapshot.params['id'];
    //2 recuperer le product dans p
    this.consP.getTaskById(this.id).subscribe((data)=>{this.p=data
      //3
      this.addForm.patchValue(this.p)
    })
  }
  save(){
    this.consP.updateTask(this.id,this.addForm.value).subscribe(()=>this.route.navigateByUrl('/task'))

  }

}
