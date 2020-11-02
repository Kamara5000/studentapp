import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';


// export interface StudentInterface{
//     matNO: String,
//     firstName:String, surName:String, middleName:String, studentDept:String
    
//   };
@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.css']
})
export class SiblingTwoComponent implements OnInit {

  
  //public stud= {matNO:"", firstName:"", surName:"", middleName:"", studentDept:""};
  public stud;
  public k="";
  public myStud={};
  public first="";

  public editStud;
  constructor( public behaviour: BehaviourService) { }
  
  ngOnInit(): void {
         this.behaviour.dataSource.subscribe(data =>{
       this.stud = data;
     })
  }

  edit(m){
      if (m.firstName) {
        this.k = m.firstName;
        this.first="first";        
      }
      else if (m.surName) {
        this.k = m.surName; 
        this.first="surN";        
      }

      else if(m.middleName){
       this.k=m.middleName;
       this.first="midN"; 
      }

      else if(m.studentDept){
      this.k = m.studentDept;
      this.first="dept"; 
      }
    

  }

  
  update(){
    
    if (this.first=="first") {
    this.stud.firstName=this.k;
    console.log(this.stud);
    this.behaviour.updateSource(this.stud);

    }

   else if (this.first=="surN") {
      this.stud.surName=this.k;
      console.log(this.stud);
      this.behaviour.updateSource(this.stud);
  
      }
      else if (this.first=="midN") {
        this.stud.middleName =this.k;
        console.log(this.stud);
        this.behaviour.updateSource(this.stud);
    
        }

        else if (this.first=="dept") {
          this.stud.studentDept=this.k;
          console.log(this.stud);
          this.behaviour.updateSource(this.stud); 
        }
        
      
    
    
  }


}

