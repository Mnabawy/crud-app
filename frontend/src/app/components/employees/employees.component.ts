import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any;
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

}
