import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    this.utilService.clear();
    this.router.navigate([""]);
  }


}
