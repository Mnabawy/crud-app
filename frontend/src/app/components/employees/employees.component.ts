import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any;
  employee = new Employee;
  constructor(private dataservice:DataService) { 

  }

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
     this.dataservice.getDate().subscribe(res =>  {
      this.employees = res; 
     }
      
      );
  }

  insertData(){
    this.dataservice.insertData(this.employee).subscribe(res=>{
    this.getEmployeesData()
      
    })
    
  }

}
