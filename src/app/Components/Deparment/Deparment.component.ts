import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeparmentService } from 'src/app/Services/Deparment/Deparment.service';

@Component({
  selector: 'app-Deparment',
  templateUrl: './Deparment.component.html',
  styleUrls: ['./Deparment.component.css']
})
export class DeparmentComponent implements OnInit {

  @Input() item:any;
  constructor(private deparmentService:DeparmentService,private router:Router) { }

  ngOnInit() {
  }
  DeleteDeparment(id:any){
    console.log(id)
    
    this.deparmentService.DeleteDepartment(id).subscribe((data)=>{
      console.log(data)
      
    })
    window.location.reload();
  }

  NavigateToTasksDeprament(Id:number){
    this.router.navigate(['TasksByDeparment/'+ Id])
  }

  NavigateToEditDeparment(Id:number){
    this.router.navigate(['EditDeprament/'+ Id])
  }

}
