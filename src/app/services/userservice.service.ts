import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private loggerService:LoggerService) { }
  user = [
    {name:"John",status:"active"},
    {name:"Janardan",status:"inactive"},
    {name:"Jignesh",status:"active"}
  ]
  addNewUser(name:string, status:string){
    this.user.push({name:name,status:status});
    this.loggerService.logMeassge(name,status);
  }
}
