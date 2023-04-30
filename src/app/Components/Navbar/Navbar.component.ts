import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeparmentService } from 'src/app/Services/Deparment/Deparment.service';
import { EventService } from 'src/app/Services/EventClick/Event.service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Deparments:any;
  clickEvent:Subscription;
  constructor(private deparmentService:DeparmentService,private eventService:EventService) {
    this.clickEvent = this.eventService.getEvent().subscribe(()=>{
      this.LoadPage();
    })
    
   }

  ngOnInit() {
    this.LoadPage()
  }
  

  LoadPage(){
    this.deparmentService.GetDeparments().subscribe((data)=>{
      this.Deparments = data;
      console.log(data)
     })
  }
}
