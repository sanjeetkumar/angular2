import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  employee:string;
  salary:number;
  todolist:string[];
  @ViewChild('listtextbox')
  myInputVariable: any;


    constructor(){
      this.employee="ravi";
      this.salary=50000;
      this.todolist=["Learn Angular","Do practice"];
    }
    addtasklist(myaval){
      this.todolist.push(myaval);
      this.reset();
     
      console.log(myaval);
    }
    removelist(id){
      console.log(id);
      this.todolist.splice(id,1);
    }
    reset() {
      
      this.myInputVariable.nativeElement.value = "";
      
    }

}
