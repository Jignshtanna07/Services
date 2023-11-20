import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [UserserviceService]
})
export class AddUserComponent implements OnInit {

  username:string =""
  status:string= "active"
    constructor(private userservice: UserserviceService){}

    ngOnInit(){}
    addUser(){
      this.userservice.addNewUser(this.username, this.status)
      console.log(this.userservice.user)
    }

}
