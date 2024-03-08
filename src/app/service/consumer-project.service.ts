import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../model/Project";
import {Task} from "../model/Task";

@Injectable({
  providedIn: 'root'
})
export class ConsumerProjectService {

  constructor(private http:HttpClient) { }

  getProject() {
    return this.http.get<Project[]>("http://localhost:3000/project")
  }
  getTask() {
    return this.http.get<Task[]>("http://localhost:3000/task")
  }
  addTask(p:Task){
    return this.http.post("http://localhost:3000/task",p)
  }
  getTaskById(id:number) {
    return this.http.get<Task>("http://localhost:3000/task"+'/'+id)
  }
  deleteTask(id:number){
    return this.http.delete("http://localhost:3000/task"+'/'+id)
  }
  updateTask(id:number, p:Task){
    return this.http.put("http://localhost:3000/task"+'/'+id,p)
  }
}
