import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {


  public Student={matNO: '', firstName:'', studentDept:'', studentNum:'',date:'', time:''};
  constructor(public currentRoute: ActivatedRoute, public student: StudentService)  { }

  ngOnInit(): void {

    console.log(this.currentRoute);
    let id = this.currentRoute.snapshot.params.index;
     let view= this.student.getTodo();
    //let view =JSON.parse(localStorage.getItem('students'));
  
    let myView= view[id];
    // console.log (myView)

    this.Student= myView;

    console.log(this.Student)
  }



}
