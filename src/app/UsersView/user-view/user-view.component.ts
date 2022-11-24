import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../util.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  @Output()
  logoutEvent = new EventEmitter<String>();


  flag:boolean=true;
  err:boolean=false;
  source:string[]=[];
  destinations:string[]=[];
  date:Date=new Date();
  from:string="";
  to:string="";

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
    if(!this.utilService.check()){
      console.log(this.utilService.check())
        this.router.navigate(["/error"])
    }

   this.utilService.getSource().subscribe({
    next:(data)=>{this.source=data;}
  });
  }

  logout(){
    this.utilService.clear();
    this.router.navigate(["/login"]);

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

  sourceChange(e:any){
    console.log(e.target.value);
    this.utilService.getDestinations(e.target.value).subscribe({
      next:(data)=>{this.destinations=data;}
    });
    this.from=e.target.value;


  }

  destChange(e:any){
    this.to=e.target.value;
  }

  search(){
    if(this.from==""||this.to==""||this.date.toString()==""){
        console.log(this.from);
        console.log(this.to);
        console.log(this.date);

        this.err=true;
    }else{
      this.utilService.getTrains(this.from,this.to,this.date).subscribe({
        next:(data)=>{console.log(data)}
      });
    }

  }

  dateChange(e:any){

    console.log(e.target.value);
    this.date=new Date(e.target.value);
    console.log(this.date)
   
  }

  regTrain(){
    
  }

}
