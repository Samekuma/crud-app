import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeRecordService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employee', data);
  }

  updateEmployee(id: string, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employee/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return  this._http.get('http://localhost:3000/employee');
  }

  deleteEmployee(id: string): Observable<any> {
    return this._http.delete(`http://localhost:3000/employee/${id}`);
  }
}
