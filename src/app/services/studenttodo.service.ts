import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudenttodoService {

  constructor( public http: HttpClient ) { }


  getTodo(){
    //return JSON.parse(localStorage.getItem('todos'))
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }
  // getTodoDetails(id){
  //   //return JSON.parse(localStorage.getItem('todos'))
  //   return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  // }
  getTodoDetails(){
    //return JSON.parse(localStorage.getItem('todos'))
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos`);
  }
}

