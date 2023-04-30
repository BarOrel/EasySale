import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskModel } from 'src/app/Models/TaskModel';
import { TaskService } from 'src/app/Services/Task/Task.service';

@Component({
  selector: 'app-AddTask',
  templateUrl: './AddTask.component.html',
  styleUrls: ['./AddTask.component.css']
})
export class AddTaskComponent implements OnInit {

  reactiveForm:FormGroup;
  
  constructor(private taskService:TaskService) { }
  
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      Title: new FormControl(null,[Validators.required]),
      Description: new FormControl(null,[Validators.required]),
      Department_Id: new FormControl(null,[Validators.required])
    });

   
   

  }

  AddTask(){
    let task = new TaskModel();
    task.Title = this.reactiveForm.value.Title;
    task.Description = this.reactiveForm.value.Description;
    task.Department_Id = this.reactiveForm.value.Department_Id;

    this.taskService.AddTask(task).subscribe((data)=>{
     
      
    })
    
  }


}
