import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    this.utilService.clear();
    this.router.navigate(["/login"]);
   
  }

}
