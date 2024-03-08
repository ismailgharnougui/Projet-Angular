import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {TasksComponent} from "./tasks/tasks.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {DetailsTaskComponent} from "./details-task/details-task.component";
import {UpdateTaskComponent} from "./update-task/update-task.component";

const routes: Routes = [
    {path:'', redirectTo:'/projet', pathMatch:'full'},
    {path:'projet', component:ProjectsComponent},
  {path:'task', component:TasksComponent},
  {path:'AddTask/:id',  component:AddTaskComponent},
    {path:'DetailsTask/:id',  component:DetailsTaskComponent},
    {path:'UpdateTask/:id',component:UpdateTaskComponent},
    {path:'**',  component:NotFoundComponent}

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
