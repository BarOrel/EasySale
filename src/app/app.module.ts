import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './Components/Task/Task.component';
import { TasksByDeparmentComponent } from './Pages/TasksByDeparment/TasksByDeparment.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { EditDeparmentComponent } from './Pages/EditDeparment/EditDeparment.component';
import { EditTaskComponent } from './Pages/EditTask/EditTask.component';
import { AddDepartmentComponent } from './Pages/AddDepartment/AddDepartment.component';
import { AddTaskComponent } from './Pages/AddTask/AddTask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { DeparmentComponent } from './Components/Deparment/Deparment.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksByDeparmentComponent,
    HomeComponent,
    EditDeparmentComponent,
    EditTaskComponent,
    AddDepartmentComponent,
    AddTaskComponent,
    NavbarComponent,
    DeparmentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
