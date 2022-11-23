import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from 'src/Login';
import { User } from 'src/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from 'src/Register';
import { Details } from './TrainClasses/Details';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private httpClient:HttpClient) { }

  validatelogin(login:Login):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8081/authenticate", {"username": login.username,"password":login.password},
  {observe: 'response' as 'body'})
  .pipe(map(user => {
       return user;
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
  

}
