import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { User } from 'src/User';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  constructor(private utilservice:UtilService, public router:Router) { }

  ngOnInit(): void {
            if(this.utilservice.getUser().username!=""){
              this.flag=true;
            }else{
              this.error="invalid user";
            }
            if(!this.utilservice.check()){
              this.router.navigate(["/error"])
      }


  }

userid:any;
username:string="";
password:string="";
mobileNo:string="";
email:string="";
flag:boolean=false;
error:string="";
accountNonLocked:boolean=true;
accountNonExpired:boolean=true;
credentialsNonExpired:boolean=true;
enabled:boolean=true;
authorities:string[]=[""];
roles:any;



// checkId(){
//   if(this.utilservice.searchUser(this.userid)!==null)
// {
//   this.flag=true;
//   this.userid="";

// }
// else{
//   this.error="enter userid";
  
// }}


a:any;
res:string=""

update(f:NgForm){

  let a=new User(this.userid,this.username,this.password,this.mobileNo,this.email,this.roles);
  console.log(a);
    this.utilservice.modifyUser(a).subscribe({
      error:()=>{
        this.error="Invalid user,please enter correct details";
      },
      complete:()=>{
        this.res="updated successfully";
        this.userid=0;
        this.username="";
        this.password="";
        this.mobileNo="";
        this.email="";
      }
    })
  
}

}
