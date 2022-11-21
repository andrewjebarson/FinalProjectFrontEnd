import { Component, OnInit } from '@angular/core';
import { UtilService } from './util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'finalproject';

  page:String="login";
  constructor(private utilService:UtilService){}
  ngOnInit(): void {
   
    this.utilService.authenticate().subscribe({
      next:(data)=>{
        if(data==true){
          this.page="dashboard";
          console.log(this.utilService.getUser())
        }
      },
      error:(err)=>{
        this.page="login"
      }
    }
    );
  

  }
 
  
  showPage(s:string){
    this.page=s;
  }

  



}
