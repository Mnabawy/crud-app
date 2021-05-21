import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getDate() {
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }

  insertData(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addEmployee', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete("http://127.0.0.1:8000/api/deleteEmployee/" + id)
  }

  getEmployeeById(id: any) {
    return this.httpClient.get("http://127.0.0.1:8000/api/employee/" + id)
  }

  updateData(id:any, data:any) {
    return this.httpClient.put("http://127.0.0.1:8000/api/updateEmployee/"+id, data)
  }

}
