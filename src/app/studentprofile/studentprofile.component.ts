import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  
  constructor(public studentservice: StudentService) { }
  
   public Student={matNO:'', studentName:'', studentDept:'', studentNum:'',date:'', time:''};
  //public Student=[];

  ngOnInit(): void {
    //let view =JSON.parse(localStorage.getItem('students'));

    let view =  this.studentservice.getTodo();

    let currentview =JSON.parse(localStorage.getItem('currentstudent'));
    
   let s= view.filter((view,index)=>currentview==view.email);
   this.Student=s[0];
    console.log(this.Student);

     localStorage.removeItem("currentstudent");
  }
}