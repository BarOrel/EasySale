import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
BaseUrl:string = "https://localhost:7194/api/";

constructor(private http:HttpClient) { }

GetTasksByDeparment(Deparment_Id:number){
  return this.http.get(this.BaseUrl+'Task/' + Deparment_Id);
}
GetTasks(){
  return this.http.get(this.BaseUrl+'Task' );
}
GetById(id:number){
  return this.http.get(this.BaseUrl+'Task/GetById/'+ id);
}

DeleteTask(item:any){
  return this.http.delete(this.BaseUrl+'Task/'+ item);

}
AddTask(item:any){
  return this.http.post(this.BaseUrl+'Task' , item);

}
EditTask(item:any){
  return this.http.patch(this.BaseUrl+'Task' , item);

}

}
