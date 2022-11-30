import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Detail } from './TrainClasses/Detail';

@Injectable({
  providedIn: 'root'
})
export class AdminUtilService {
 
  constructor(private httpClient:HttpClient) { }
 
  addTrain(t:Detail):Observable<any>{
    console.log(JSON.stringify(t));
      return this.httpClient.post<Detail>("http://localhost:8082/addTrain",{"trainId":t.trainId,"trainName":t.trainName,"basePrice":t.basePrice,"schedules":t.schedules,"stations":t.stations},{responseType:"json"})
  }
  
  viewTrain(trainId:any):Observable<any>{
    return this.httpClient.get("http://localhost:8082/getTrainById/"+trainId);
  }  

  modifyTrain(t:Detail):Observable<any>{
    return this.httpClient.put<any>("http://localhost:8082/updateTrain",{"trainId":t.trainId,"trainName":t.trainName,"basePrice":t.basePrice,"schedules":t.schedules,"stations":t.stations},{responseType:"json"})}
   
  }
  

 
 
