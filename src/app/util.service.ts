import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from 'src/Login';
import { User } from 'src/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from 'src/Register';
import { Detail } from './TrainClasses/Detail';
import Orders from './OrderClass/Orders';
import { Schedule } from './TrainClasses/Schedule';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private httpClient:HttpClient) { }

  validatelogin(login:Login):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8081/authenticate", {"username": login.username,"password":login.password},
  {observe: 'response' as 'body'})
  .pipe(map(u => {
       return u;
  }));

    // return this.httpClient.post<any>("http://localhost:8081/authenticate",
    // {"username":login.username,"password":login.password},{responseType:"json"});
  }

  addUser(user:Register):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8081/registerUser",{"userid":user.userid,"password":user.password,"username":user.username,"mobileNo":user.mobileNo,"email":user.email,"roles":user.roles},
    {observe: 'response' as 'body'})
    .pipe(map(u => {
         return u;
    }));


   
  }


  // addTrain(t:Details):Observable<any>{
  //   return this.httpClient.post<any>("http://localhost:8082/addTrain",{"trainId":t.trainId,"password":user.password,"username":user.username,"mobileNo":user.mobileNo,"email":user.email,"roles":user.roles},
  //   {observe: 'response' as 'body'})
  //   .pipe(map(u => {
  //        return u;
  //   }));


   
  // }






  setBearerToken(token: string) {
    sessionStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return sessionStorage.getItem('bearerToken');
  }

  setUser(user: User) {
    sessionStorage.setItem('Username', user.username.toString());
    sessionStorage.setItem('Email', user.email.toString());
    sessionStorage.setItem('Mobile', user.mobileNo.toString());
    sessionStorage.setItem('Id', user.userid.toString());
    sessionStorage.setItem('Role', user.roles.toString());
  }

  getUser() {
    let user=new User(0,"","","","","");
    user.username=sessionStorage.getItem('Username')??"";
    user.email=sessionStorage.getItem('Email')??"";
    user.mobileNo=sessionStorage.getItem('Mobile')??"";
    user.roles=sessionStorage.getItem('Role')??"";
    user.userid=((sessionStorage.getItem('Id') as unknown) as number)??0;
    return user;
  }





  authenticate(){
    const token=this.getBearerToken();
    if(token!=null){
    return this.httpClient.post('http://localhost:8081/validate', {}, {
      headers: new HttpHeaders().set('Authorization', token)
    })}else{
      return this.httpClient.post('http://localhost:8081/validate', {}, {
     
      headers: new HttpHeaders().set('Authorization', "")
      })
    }
  }

  check():boolean{
    if(this.authenticate().subscribe({
      next:(data)=>{
        console.log(data);
        if(data==true){
         return true;
        }else{
          return false;
        }
      },
      error:(err)=>{
        return false;
      }
    }
    )){
    return true;}else{
      return false;
    }
   
  }



  clear(){
    sessionStorage.clear();
  }
  

//=========================================================<USER>==================================

getSource():Observable<any>{
    return this.httpClient.get("http://localhost:8082/getSource");
}
getDestinations(s:string):Observable<any>{
  return this.httpClient.get("http://localhost:8082/getDestination/"+s);
}


getTrains(from:string,to:string,date:Date){
  return this.httpClient.get("http://localhost:8082/getTrainByStationAndDate/"+from+"/"+to+"/"+date.toISOString().replace('Z', '')+"+00:00");
}

// =================================================<Orders>====================


setOrder(order:Orders):Observable<any>{
  
  console.log(JSON.stringify(order));
  return this.httpClient.post("http://localhost:8084/saveOrder",
  
  {"orderId":null,
  "vechileId":order.vechileId,
  "vechileName":order.vechileName,
  "userId":this.getUser().userid,
  "noOfSeats":order.noOfSeats,
  "passengerDetails":
  order.passengerDetails,
  "sourcePlace":order.sourcePlace,
  "destinationPlace":order.destinationPlace,
  "totalFare":order.totalFare,
  "status":"Success",
  "orderDate":order.orderDate.toISOString().replace('Z', '')+"+00:00",
  "travelDate":order.travelDate,
  "category":order.category}
  ,{responseType:"json"});



}

reduceSeats(order:Orders,catId:any,train:Detail):Observable<any>{
  for(let s of train.schedules){
    for(let c of s.seats){
        if(c.categoryId==catId){

          c.totalSeats-=order.noOfSeats;
          console.log(c.totalSeats);
        }
    }
  }

  console.log(JSON.stringify(train));
  return this.httpClient.put("http://localhost:8082/updateTrain",
  {"trainId":train.trainId,"trainName":train.trainName,"basePrice":train.basePrice,"schedules":train.schedules,"stations":train.stations}
  ,{responseType:"json"});

}



getOrder(pnr:any):Observable<any>{
  return this.httpClient.get("http://localhost:8084/getOrderById/"+pnr);

}


getTrainById(id:any){
  return this.httpClient.get("http://localhost:8082/getTrainById/"+id);
}



sendMail(to:string,orderId:any,total:any){
  return this.httpClient.get("http://localhost:8084/sendOrder/"+to+"/"+orderId+"/"+total);
}

modifyUser(user:User):Observable<any>{
  return this.httpClient.put<any>("http://localhost:8081/update",{
    "userid":this.getUser().userid,"username":user.username,"password":user.password,"mobileNo":user.mobileNo,
    "email":user.email,"roles":user.roles,
    "accountNonExpired":true,
    "accountNonLocked":true,
    "credentialsNonExpired":true,
    "enabled":true,
    "authorities":["roles_user"]
  },{responseType:"json"});
}

getUpcoming():Observable<any>{
  return this.httpClient.get("http://localhost:8084/getOrdersByUserId/"+this.getUser().userid);
}


}
