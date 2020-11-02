import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { SecurityGuard } from './security.guard';
import { StudenttodoComponent } from './studenttodo/studenttodo.component';
import { StudenttododetailsComponent } from './studenttododetails/studenttododetails.component';
import { ParentComponent } from './parent/parent.component';
import { ParentOfSiblingsComponent } from './parent-of-siblings/parent-of-siblings.component';



const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'student', children:[
    {path:'', component: StudentsComponent},
    {path:'studentdetails/:index', component: StudentdetailsComponent}
  ] },
  {path:'login', component:LoginComponent},
  {path:'parent', component:ParentComponent},
  {path:'parentofsiblings', component:ParentOfSiblingsComponent},
  {path:'studentprofile', component:StudentprofileComponent,canActivate:[SecurityGuard]},
  {path:'studenttodo', component: StudenttodoComponent },
  {path:'studenttododetails/:id', component: StudenttododetailsComponent },
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
