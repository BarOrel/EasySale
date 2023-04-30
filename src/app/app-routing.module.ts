import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDeparmentComponent } from './Pages/EditDeparment/EditDeparment.component';
import { EditTaskComponent } from './Pages/EditTask/EditTask.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { TasksByDeparmentComponent } from './Pages/TasksByDeparment/TasksByDeparment.component';
import { AddDepartmentComponent } from './Pages/AddDepartment/AddDepartment.component';
import { AddTaskComponent } from './Pages/AddTask/AddTask.component';

const routes: Routes = [
  
  { path: "AllTasks", component: HomeComponent },
  { path: "TasksByDeparment/:id", component: TasksByDeparmentComponent },
  { path: "EditDeprament/:id", component: EditDeparmentComponent },
  { path: "EditTask/:id", component: EditTaskComponent },
  { path: "AddTask", component: AddTaskComponent },
  { path: "AddDeparment", component: AddDepartmentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
