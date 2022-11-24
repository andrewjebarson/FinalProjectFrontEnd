import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
 
  constructor(private utilService:UtilService) { }

  ngOnInit(): void {
  }
 
}
