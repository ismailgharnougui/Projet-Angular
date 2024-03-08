import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DetailsTaskComponent } from './details-task/details-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    TasksComponent,
    NavbarComponent,
    NotFoundComponent,
    AddTaskComponent,
    DetailsTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
