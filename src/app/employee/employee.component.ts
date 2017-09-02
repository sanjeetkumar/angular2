import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: any[];
  constructor() { 
    this.employee= [
        {'empId':'E001','empname':'Ravi','gender':'male','salary':5000,'dateofbirth':'10/05/1970'},
        {'empId':'E002','empname':'Rahul','gender':'male','salary':5000,'dateofbirth':'12/05/2007'},
        {'empId':'E003','empname':'Amit','gender':'male','salary':1000,'dateofbirth':'3/05/2000'},
        {'empId':'E004','empname':'Sita','gender':'female','salary':4000,'dateofbirth':'9/05/1990'}
    ]
  }

  ngOnInit() {
  }

}
