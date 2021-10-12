import { Injectable } from "@angular/core";
import {TaskModel} from "../TaskModel";
import {Observable} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: "root"
})
export class TaskService {
private apiUrl = 'http://localhost:5000/tasks';
  constructor(private _http: HttpClient) { }

  GetTasks(): Observable<TaskModel[]>{
    return this._http.get<TaskModel[]>(this.apiUrl);
  }
  DeleteTask(task:TaskModel): Observable<TaskModel>{
    const url = `${this.apiUrl}/${task.id}`;
    return this._http.delete<TaskModel>(url);
  }
  ToggleTaskReminder(task:TaskModel):Observable<TaskModel>{
    const url = `${this.apiUrl}/${task.id}`;
    return this._http.put<TaskModel>(url,task, httpOptions)
  }
  AddTask(Task:TaskModel):Observable<TaskModel>{
    return this._http.post<TaskModel>(this.apiUrl,Task)
  }
}
