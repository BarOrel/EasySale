import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root'
   })
export class DeparmentService {

     BaseUrl:string = "https://localhost:7194/api/";

     constructor(private http:HttpClient) { }
     
     
     GetDeparments(){
       return this.http.get(this.BaseUrl+'Department' );
     }
     
     DeleteDepartment(item:any){
       return this.http.delete(this.BaseUrl+'Department/'+ item);
     
     }
     GetById(item:any){
       return this.http.get(this.BaseUrl+'Department/'+ item);
     
     }
     AddDeparment(item:any){
       return this.http.post(this.BaseUrl+'Department' , item);
     
     }
     EditDeparment(item:any){
       return this.http.patch(this.BaseUrl+'Department' , item);
     
     }

}
