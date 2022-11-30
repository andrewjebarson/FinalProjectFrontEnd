import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../util.service';
import bookingRequest from '../bookingRequest';
import searchRequest from '../searchRequest';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  // @Output()
  // logoutEvent = new EventEmitter<String>();

  @Output()
  bookingView=new EventEmitter<searchRequest>();

 @Output()
 pnrView=new EventEmitter<number>();


  flag:boolean=true;
  err:boolean=false;
  source:string[]=[];
  destinations:string[]=[];
  date:Date=new Date();

  pnr:number=0;
  fromOption:string="";
  toOption:string="";
  dateOption:any;

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
    if(!this.utilService.check()){
      console.log(this.utilService.check())
      sessionStorage.clear();
        this.router.navigate(["/error"])
    }

  
   this.utilService.getSource().subscribe({
    next:(data)=>{this.source=data;}
  });
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
    console.log(`Ng Model Value ${this.fromOption}`);
    
    this.utilService.getDestinations(e.target.value).subscribe({
      next:(data)=>{this.destinations=data;}
    });
    


  }

  

  search(){

    if(this.flag){
    if(this.date.toString()=="" || this.fromOption==""||this.toOption==""){
       
        console.log(this.fromOption);
        console.log(this.toOption);
        console.log(this.date);

        this.err=true;
    }else{

     
      this.bookingView.emit(new searchRequest(this.fromOption,this.toOption,this.date));
      console.log("Going to search")
     
    }}
    else{
if(this.pnr==0){
  this.err=true;

}else{
this.pnrView.emit(this.pnr);
}


    }
  }

  dateChange(e:any){

    console.log(`Ng Model ${this.dateOption}`);
    this.date=new Date(this.dateOption);
    console.log(this.date)
   
  }

  

}
