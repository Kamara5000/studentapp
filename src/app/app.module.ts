import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentsComponent } from './students/students.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { LoginComponent } from './login/login.component';
import { StudenttodoComponent } from './studenttodo/studenttodo.component';
import { StudenttododetailsComponent } from './studenttododetails/studenttododetails.component';
import { NamePipe } from './pipes/name.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentOfSiblingsComponent } from './parent-of-siblings/parent-of-siblings.component';
import { SiblingOneComponent } from './sibling-one/sibling-one.component';
import { SiblingTwoComponent } from './sibling-two/sibling-two.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentdetailsComponent,
    StudentsComponent,
    NotfoundComponent,
    StudentprofileComponent,
    LoginComponent,
    StudenttodoComponent,
    StudenttododetailsComponent,
    NamePipe,
    FilterPipe,
    ParentComponent,
    ChildComponent,
    ParentOfSiblingsComponent,
    SiblingOneComponent,
    SiblingTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
