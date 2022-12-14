import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/Login';
import { User } from 'src/User';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private utilService:UtilService,private router:Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  username:string="";
  password:string="";
  @Output()
loginEvent = new EventEmitter<string>();

  user:User=new User(0,"","","","",""); 
  
  
  res:any;

  validatelogin(f:NgForm){
    if(this.username!="" && this.password!="" ){

    this.utilService.validateLogin(new Login(this.username,this.password)).subscribe(
      
        (data: HttpResponse<any>) => {
          //console.log(data);
          this.user=data.body;
         
      this.utilService.setBearerToken(data.headers.get('Authorization')??"");

      //console.log(this.utilService.getBearerToken());
      
            this.utilService.setUser(this.user);
            //console.log(this.utilService.getUser());
            //console.log("GOing to dashboard");
            this.loginEvent.emit("dashboard");

        },
        error => {
         //console.log(error);
         this.res="Please enter correct details";
        }
      
// {
//    next:(data)=>{console.log(data);

//     if(data=="false"){
//       this.res="Please enter correct details"
//     }else{
//       this.u=data.user;
//       this.utilService.setBearerToken(data.token.Authorization[0]);

//       console.log(this.utilService.getBearerToken());
      
//       this.utilService.setUser(this.u);
//       console.log(this.utilService.getUser());
//       this.loginEvent.emit("dashboard");
      
//     }

//    },
//    error:(err)=>{
//      console.log(err);
//      this.res="Please enter correct details"
//    }

//  }


      );
    }else{
      this.res="Please fill out the details"
    }
    
  }



goToRegister(){
  this.loginEvent.emit("register");
}


  
  // authenticate(){
  //   this.utilService.authenticate().subscribe({
  //     next:(data)=>{console.log(data)}
  //   }
  //   );
  // }



}
