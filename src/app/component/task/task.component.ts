import { Component, OnInit } from "@angular/core";
import {TaskModel} from "../../TaskModel"
import {TaskService} from "../../services/task.service"

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  tasks: TaskModel[] = [];
  constructor(private _task : TaskService) { }

  ngOnInit(): void {
    this._task.GetTasks().subscribe((task)=>{
      this.tasks = task;
    })
  }

}
