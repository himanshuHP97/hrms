import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {
  constructor(private http:HttpClient) { }

  addEmp(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/worklogs', data);
  }
  updateEmp(id:number,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/worklogs/${id}`, data);
  }
  getEmp(): Observable<any> {
    return this.http.get('http://localhost:3000/worklogs');
  }
  deleteEmployee(id:number): Observable<any>{
    return this.http.delete(`http://localhost:3000/worklogs/${id}`);
  }
}
