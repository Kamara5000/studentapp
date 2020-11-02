import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';




  //interface
// export interface StudentInterface{
//   matNO: String,
//   studentName: String,
  
// };

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent implements OnInit {

  //type defination using iterface
  //public student : Array<StudentInterface>;
  public student= [];
  public stud= {}
  constructor( public behaviour: BehaviourService) { }
  
  ngOnInit(): void {

    this.student= JSON.parse(localStorage.getItem('students'))     
     this.behaviour.dataSource.subscribe(data =>{
       this.stud = data;

       this.student=this.student.filter((st,i)=>st.matNO==this.stud.matNO?this.stud:st);
       localStorage.setItem("students", JSON.stringify(this.student));

       })
     
  }

  update(nam){
    this.behaviour.updateSource(nam);

    console.log(nam)
  }


}



