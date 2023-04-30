import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/Task/Task.service';


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  Tasks:any;
  
  constructor(private taskService:TaskService) { 
    
  }
  
 
  ngOnInit() {
    this.LoadPage()
  }


  LoadPage(){
    this.taskService.GetTasks().subscribe((data:any)=>{
      
      this.Tasks = data
    })
  }
}
