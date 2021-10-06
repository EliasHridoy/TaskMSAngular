import { Injectable } from "@angular/core";
import {Tasks} from "../Mock-task";
import {TaskModel} from "../TaskModel"
import {Observable, observable, of} from "rxjs"


@Injectable({
  providedIn: "root"
})
export class TaskService {

  constructor() { }

  GetTasks(): Observable<TaskModel[]>{
    const task = of(Tasks);
    return task;
  }
}
