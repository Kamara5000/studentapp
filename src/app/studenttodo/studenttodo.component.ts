import { Component, OnInit } from '@angular/core';
import { StudenttodoService } from '../services/studenttodo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studenttodo',
  templateUrl: './studenttodo.component.html',
  styleUrls: ['./studenttodo.component.css']
})
export class StudenttodoComponent implements OnInit {


  public studenttodo = [];
  constructor( public router: Router, public student: StudenttodoService ) { }

  ngOnInit(): void {
    
    //let todos = JSON.parse(localStorage.getItem('todos'));
    //let todos = this.todoService.getTodo();
    this.student.getTodo().subscribe(todos=>{console.log(todos);
      this.studenttodo=todos});
      console.log(this.studenttodo)
  }

  viewdetails=(id)=>{
    alert("view");
    this.router.navigate([`/studenttododetails/${id}`]);
  }

}
