import { Component, OnInit } from '@angular/core';
import { DeparmentService } from 'src/app/Services/Deparment/Deparment.service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Deparments:any;
  
  constructor(private deparmentService:DeparmentService) { }

  ngOnInit() {
   this.deparmentService.GetDeparments().subscribe((data)=>{
    this.Deparments = data;
   })
  }
  
}
