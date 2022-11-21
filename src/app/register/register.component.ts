import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from 'src/Login';
import { Register } from 'src/Register';
import { User } from 'src/User';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private utilService:UtilService,private router:Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  username:string="";
  password:string="";
  mobileNo:string="";
  email:string="";

  @Output()
registerEvent = new EventEmitter<string>();

  u:Register=new Register(null,"","","","","User"); 
  
  
  res:any;

  register(f:NgForm){

    this.u.username=this.username;
    this.u.email=this.email;
    this.u.password=this.password;
    this.u.mobileNo=this.mobileNo;
    
console.log(this.u)

    this.utilService.addUser(this.u).subscribe(


{
   next:(data)=>{console.log(data);

    if(data=="false"){
      this.res="Please enter correct details"
    }else{
      this.u=data.user;
      console.log(this.u);
      this.utilService.setBearerToken(data.token.Authorization[0]);

      console.log(this.utilService.getBearerToken());
      

      this.registerEvent.emit("dashboard");
      
    }

   },
   error:(err)=>{
     console.log(err);
     this.res="Please enter correct details"
   }

 }


      );
      
    
  }



  goToLogin(){
    this.registerEvent.emit("login");
  }

  
  // authenticate(){
  //   this.utilService.authenticate().subscribe({
  //     next:(data)=>{console.log(data)}
  //   }
  //   );
  // }

}
