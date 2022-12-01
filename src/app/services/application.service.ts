import { Observable } from 'rxjs';
import { ICreateApplicationModel } from './../models/request/application/createApplicationModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  
  applicationModel:ICreateApplicationModel[]=[]

  path="http://localhost:3000/application"

  constructor(private httpClient:HttpClient) { }

  getApplication():Observable<ICreateApplicationModel[]>{
   return this.httpClient.get<ICreateApplicationModel[]>(this.path)
  }

  getApplicationById(id:number):Observable<ICreateApplicationModel>{

    return this.httpClient.get<ICreateApplicationModel>(this.path + "/" +id)

  }

  add(value:any){

    return this.httpClient.post(this.path,value);
  }

  delete(applicationModel : ICreateApplicationModel):Observable<ICreateApplicationModel>{
    return this.httpClient.delete<ICreateApplicationModel>(this.path+"/"+applicationModel.id)
  }
  update(id:number,application:any){
    
    return this.httpClient.put(this.path + "/" +id,application)
  }

}
