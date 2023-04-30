import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Deparment } from 'src/app/Models/Deparment';
import { DeparmentService } from 'src/app/Services/Deparment/Deparment.service';
import { EventService } from 'src/app/Services/EventClick/Event.service';


@Component({
  selector: 'app-AddDepartment',
  templateUrl: './AddDepartment.component.html',
  styleUrls: ['./AddDepartment.component.css']
})
export class AddDepartmentComponent implements OnInit {

  reactiveForm:FormGroup;
  
  constructor(private deparmentService:DeparmentService,private eventService:EventService) { }
  
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      Name: new FormControl(null,[Validators.required]),
      Number: new FormControl(null,[Validators.required]),
      
    });

   
   

  }

  AddDeparment(){
    let deparment = new Deparment();
    deparment.Name = this.reactiveForm.value.Name;
    deparment.Number = this.reactiveForm.value.Number;
    
    console.log(this.reactiveForm)
    this.deparmentService.AddDeparment(deparment).subscribe((data)=>
    {
      this.eventService.sendClickEvent();
    })
  }


}
