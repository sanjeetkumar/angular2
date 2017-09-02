import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ViewChild } from '@angular/core';
import{ RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeTitlePipePipe } from './employee/employee-title-pipe.pipe';


const approuter:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},


  {path:'**',component:PagenotfoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    PagenotfoundComponent,
    EmployeeTitlePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule.forRoot(approuter,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
