import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id: any;
  data: any;
  employee = new Employee;
  constructor(private route: ActivatedRoute, private dataservice: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();

  }

  getData() {
    this.dataservice.getEmployeeById(this.id).subscribe(res => {
      this.data = res;
      this.employee = this.data;
    });
  }

  updateEmployee() {
    this.dataservice.updateData(this.id, this.data).subscribe(res => {
      
    });
  }
}
