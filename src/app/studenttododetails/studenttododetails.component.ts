import { Component, OnInit } from '@angular/core';
import { StudenttodoService } from '../services/studenttodo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studenttododetails',
  templateUrl: './studenttododetails.component.html',
  styleUrls: ['./studenttododetails.component.css']
})
export class StudenttododetailsComponent implements OnInit {
 
 
  public studenttodo=[];
  public student=[];
  constructor(public actRoute: ActivatedRoute, public studentservice: StudenttodoService) { }

  ngOnInit(): void {

    console.log(this.actRoute)
    let todoIndex = this.actRoute.snapshot.params.id;
    console.log(todoIndex)
    //let todos = JSON.parse(localStorage.getItem('todos'));
    //let todos = this.todoService.getTodo();
    // this.studentservice.getTodoDetails(todoIndex).subscribe(todos=>{console.log(todos);
    //   this.studenttodo=todos});

     this.studentservice.getTodoDetails().subscribe(todos=>{
       console.log(todos);
     // this.studenttodo=todos;
      this.studenttodo =todos.filter((todo,i)=>todo.userId==todoIndex);
     
    

    });



    

  }

}
