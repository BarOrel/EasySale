import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { EventService } from 'src/app/Services/EventClick/Event.service';
import { TaskService } from 'src/app/Services/Task/Task.service';


@Component({
  selector: 'app-Task',
  templateUrl: './Task.component.html',
  styleUrls: ['./Task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() item:any;
  constructor(private taskService:TaskService,private router:Router,private eventService:EventService) {

   }

  ngOnInit() {
  }
  async DeleteTask(id:any){
    console.log(id)
    this.taskService.DeleteTask(id).subscribe((data)=>{
      
      
    })
    window.location.reload();
  
  }

  NavigateToEditTask(id:number){
    this.router.navigate(['EditTask/'+ id])
  }
  

}
