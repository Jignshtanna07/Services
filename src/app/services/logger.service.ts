import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  logMeassge(name: string,status: string){
    console.log('A new User with username " '+ name +'  with status  '+ status+'has been added.')
  }
}
