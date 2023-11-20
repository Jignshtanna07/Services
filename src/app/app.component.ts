import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './services/userservice.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserserviceService, LoggerService]
})
export class AppComponent implements OnInit {
  title = 'Services';

  constructor(private userService : UserserviceService , private loggerService:LoggerService){}

  users :{name:string,status:string}[]= [] 

  ngOnInit(): void {
    this.users = this.userService.user
  }
}
