import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }
public email ='';
public mystud =[];
  ngOnInit(): void {
    let stud=JSON.parse(localStorage.getItem('students'));

    if (stud) {
       this.mystud=stud;
    }

    else{
      this.mystud=[];
    }
  }
  
  viewdetails=()=>{

    // this.stud.map((mystud,index)=>mystud.email==this.email? 
    // localStorage.setItem("currentstudent",JSON.stringify(this.email)):alert('student not registered'));
  
    let n = this.mystud.filter((mystud,index)=>this.email===mystud.email);

    if (n.length!=0) {
      alert ('yes');
      localStorage.setItem("currentstudent",JSON.stringify(this.email))
    }
    else{
      alert('no')
    }
    //alert(this.email)
    this.router.navigate([`/studentprofile`]);
    //localStorage.removeItem("currentstudent")

  }
}
