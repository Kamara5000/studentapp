import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public router: Router) { }

  public matNO='';
  public firstName='';
  public middleName='';
  public surName='';
    public dept='';
  public num='';
  public Student=[];
  public email='';
  public search;

  ngOnInit(): void {
    let stud=JSON.parse(localStorage.getItem('students'));

    if (stud) {
       this.Student=stud;
    }

    else{
      this.Student=[];
    }
  }

  addStudent=()=>{
    let time = new Date() ;
   let myStudent={matNO:this.matNO, firstName:this.firstName, 
    middleName:this.middleName, surName:this.surName, studentDept:this.dept, 
    studentNum:this.num,time:time.toLocaleTimeString(),date:time.toLocaleDateString(),email:this.email};
   this.Student=[...this.Student,myStudent];
   console.log(this.Student);
   localStorage.setItem("students",JSON.stringify(this.Student));
   
   this.matNO=""; this.firstName=''; this.middleName=''; this.surName=''; this.dept=''; this.num=''; this.email;
  }

  details=(i)=>{
    
    this.router.navigate([`/student/studentdetails/${i}`])
  }
  delstud(m){
    let newStud = this.Student.filter((x,index)=>x.matNO!=m);
    this.Student= newStud;
  //console.log(this.Student)
    localStorage.setItem("students", JSON.stringify(this.Student));
  }

  editstud(m){
    let time = new Date() ;
    let myStudent= {matNO:this.matNO, firstName:this.firstName, middleName:this.middleName, surName:this.surName, studentDept:this.dept, 
      studentNum:this.num,time:time.toLocaleTimeString(),date:time.toLocaleDateString(),email:this.email};

    let edited =  this.Student.map((x,index)=>x.matNO==m?myStudent:x)
    this.Student= edited;
   // console.log(edit)
    localStorage.setItem("students", JSON.stringify(this.Student));
    this.matNO=""; this.firstName=''; this.middleName=''; this.surName=''; this.dept=''; this.num=''; this.email;
  }

  viewdetails=()=>{
    alert("view");
    this.router.navigate([`/login`]);
  }

}
