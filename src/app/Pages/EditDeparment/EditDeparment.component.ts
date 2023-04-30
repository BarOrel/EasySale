import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Deparment } from 'src/app/Models/Deparment';
import { DeparmentService } from 'src/app/Services/Deparment/Deparment.service';
import { EventService } from 'src/app/Services/EventClick/Event.service';

@Component({
  selector: 'app-EditDeparment',
  templateUrl: './EditDeparment.component.html',
  styleUrls: ['./EditDeparment.component.css']
})
export class EditDeparmentComponent implements OnInit {
  Id:any;
  department:any;
  reactiveForm:FormGroup;
  
  constructor(private deparmentService:DeparmentService,private route:ActivatedRoute,private eventService:EventService) { 

  }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.Id = (params["id"]);
       this.deparmentService.GetById(this.Id).subscribe((data:any)=>{
        this.department = data;
        
       })
      

    })


    this.reactiveForm = new FormGroup({
      Name: new FormControl(null,[Validators.required]),
      Number: new FormControl(null,[Validators.required]),
      
    });

  }

  EditDeparment(){
    let deparment = new Deparment();
    deparment.Id = this.Id;
    deparment.Name = this.reactiveForm.value.Name;
    deparment.Number = this.reactiveForm.value.Number;
    
    this.deparmentService.EditDeparment(deparment).subscribe((data)=>
    {
      this.eventService.sendClickEvent()
    })
    
    
  }


}

