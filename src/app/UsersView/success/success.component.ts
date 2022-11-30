import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

@Input()
order:any;

@Input()
bookReq:any;

  err:string="";


  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {

    //this.order.status="Success";
    this.utilService.setOrder(this.order).subscribe({
      next:(data)=>{
        this.order=data;
        console.log(this.order);
        this.utilService.reduceSeats(this.order,this.bookReq.category.categoryId,this.bookReq.train)
        .subscribe({
          next:(d)=>{
            console.log(d);
            this.sendMail(this.utilService.getUser().email,this.order.orderId,this.order.totalFare);
          },
          error:()=>{
            this.err="Something went Wrong";
          }
        })
      },
      error:()=>{
        this.err="Something went Wrong";
      },
      complete:()=>{
        this.err="Updated Successfully";
      }
    });
    }   
  
  
  sendMail(email:string,orderId:any,total:any){
    this.utilService.sendMail(email,orderId,total).subscribe({

      next:()=>{
        
        this.sendMail(this.utilService.getUser().email,this.order.orderId,this.order.totalFare);
      },
      error:()=>{
        this.err="Something went Wrong";
      }
    });


  }


  goHome(){
    this.router.navigate([""]);
    window.location.reload();
  }
  
  }
