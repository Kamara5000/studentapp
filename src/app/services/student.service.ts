import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getTodo(){
    return JSON.parse(localStorage.getItem('students'))
  }
}
