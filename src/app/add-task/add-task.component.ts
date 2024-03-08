import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../model/Project";
import {ActivatedRoute, Router} from "@angular/router";
import {ConsumerProjectService} from "../service/consumer-project.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  addForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,private route:Router,private consP:ConsumerProjectService){}

  ngOnInit() {
    this.addForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
        dateD: new FormControl(''),
      dateF: new FormControl(''),
      status:new FormControl('')
    });
  }
  save() {
    this.consP.addTask(this.addForm.value).subscribe(()=>this.route.navigateByUrl('/task'))


  }
}
