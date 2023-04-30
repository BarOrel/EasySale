import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/Services/EventClick/Event.service';
import { TaskService } from 'src/app/Services/Task/Task.service';

@Component({
  selector: 'app-TasksByDeparment',
  templateUrl: './TasksByDeparment.component.html',
  styleUrls: ['./TasksByDeparment.component.css']
})
export class TasksByDeparmentComponent implements OnInit {
  Id:any;
  Tasks:any;
  
  clickEvent:Subscription;
  constructor(private taskService:TaskService,private route: ActivatedRoute,private eventService:EventService) {
    this.clickEvent = this.eventService.getEvent().subscribe(()=>{
      this.LoadPage();
    })
    
   }
  
 LoadPage(){
  this.route.params.subscribe((params) => {
    this.Id = (params["id"]);
      this.taskService.GetTasksByDeparment(this.Id).subscribe((data:any)=>{
        
        this.Tasks = data
      })
    

  })
 }
  ngOnInit() {
    this.LoadPage()
  }




}
