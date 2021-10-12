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
  deleteTask(task:TaskModel){
    this._task.DeleteTask(task).subscribe(
      ()=>
    (this.tasks = this.tasks.filter( (t)=> t.id !== task.id)));
  }
  toggleReminder(task:TaskModel){
    task.reminder = !task.reminder;
    this._task.ToggleTaskReminder(task).subscribe();
  }
  addTask(task:TaskModel){
    this._task.AddTask(task).subscribe(
      (ta)=>
      (this.tasks.push(ta))
    )
  }
}
