import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-dashboard',
  templateUrl: './user-profile-dashboard.component.html',
  styleUrls: ['./user-profile-dashboard.component.css']
})
export class UserProfileDashboardComponent implements OnInit {

  page:string="";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  updatePage(){
    this.page="profile";
  
  }
  upcomingPage(){
  this.page="upcoming";
}

goBack(){
  this.router.navigate([""]);
  window.location.reload();
}
}
