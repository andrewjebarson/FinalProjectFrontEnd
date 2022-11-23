import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  @Output()
  logoutEvent = new EventEmitter<String>();


  flag:boolean=true;

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
    if(!this.utilService.check()){
      console.log(this.utilService.check())
        this.router.navigate(["/error"])
    }

  }

  logout(){
    this.utilService.clear();
   this.logoutEvent.emit("login");
  }

  error(){
this.router.navigate(["/error"]);
  }



  change(e:any){

      console.log(e.target.value)
      if(e.target.value=="booking"){
        this.flag=true;
      }else{
        this.flag=false;
      }

  }

  regTrain(){
    
  }

}
