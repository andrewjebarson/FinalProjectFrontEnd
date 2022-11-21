import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-token-error',
  templateUrl: './token-error.component.html',
  styleUrls: ['./token-error.component.css']
})
export class TokenErrorComponent implements OnInit {

  constructor(private utilService:UtilService,private router:Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    this.utilService.clear();
    this.router.navigate([""]);
  }

}
