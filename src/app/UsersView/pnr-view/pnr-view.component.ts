import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-pnr-view',
  templateUrl: './pnr-view.component.html',
  styleUrls: ['./pnr-view.component.css']
})
export class PnrViewComponent implements OnInit {

  @Input()
  pnr:any;

  order:any;
  train:any;

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
      this.utilService.getOrder(this.pnr).subscribe({
        next:(data)=>{
          this.order=data;
          this.getTrain(this.order.vechileId);
        },
        error:()=>{
          
        }
      });
  }


  getTrain(id:any){
      this.utilService.getTrainById(id).subscribe({
        next:(data)=>{
          this.train=data;
        }
      });
  }


  goBack(){
    this.router.navigate([""]);
    window.location.reload();
  }

}
