import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskModel } from 'src/app/Models/TaskModel';
import { TaskService } from 'src/app/Services/Task/Task.service';

@Component({
  selector: 'app-EditTask',
  templateUrl: './EditTask.component.html',
  styleUrls: ['./EditTask.component.css']
})
export class EditTaskComponent implements OnInit {
  Id:any;
  task:any;
  reactiveForm:FormGroup;
  
  constructor(private taskService:TaskService,private route:ActivatedRoute) { 

  }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.Id = (params["id"]);
       this.taskService.GetById(this.Id).subscribe((data:any)=>{
        this.task = data;
        console.log(data)
       })
      

    })


    this.reactiveForm = new FormGroup({
      Title: new FormControl(null,[Validators.required]),
      Desription: new FormControl(null,[Validators.required]),
      Department_Id: new FormControl(null,[Validators.required])
      
    });

  }

  EditTask(){
    let task = new TaskModel();
    task.Id = this.Id;
    task.Title = this.reactiveForm.value.Title;
    task.Description = this.reactiveForm.value.Description;
    task.Department_Id = this.reactiveForm.value.Department_Id;
    
    console.log(this.reactiveForm)
    this.taskService.EditTask(task).subscribe((data)=>
    {
      console.log(data)
    })
    
  }
}
