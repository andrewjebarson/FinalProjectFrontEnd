import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../util.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  @Output()
  logoutEvent = new EventEmitter<String>();
  page:string="";

  constructor(private utilService:UtilService,private router:Router) { }


  ngOnInit(): void {
    if(!this.utilService.check()){
      console.log(this.utilService.check())
      sessionStorage.clear();
        this.router.navigate(["/error"])
    }
  }
  logout(){
    this.utilService.clear();
    this.router.navigate([""]);
    window.location.reload();

  }
  addtrain(){
    this.page="addtrain"; 
  }
  removetrain(){
    this.page="removetrain"; 
  }
  modifytrain(){
    this.page="modifytrain"; 
  }
  viewtrain(){
    this.page="viewtrain"
  }
}
