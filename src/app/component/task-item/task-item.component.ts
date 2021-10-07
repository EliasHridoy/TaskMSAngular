import { Component, OnInit, Input, Output,EventEmitter } from "@angular/core";
import {TaskModel} from "../../TaskModel";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { EmitterVisitorContext } from "@angular/compiler";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"]
})
export class TaskItemComponent implements OnInit {
@Input() task: TaskModel;
@Output() onDeleteTask: EventEmitter<TaskModel> = new EventEmitter();
@Output() onToggleReminder: EventEmitter<TaskModel> = new EventEmitter();

faTimes = faTimes;
  constructor() { 
    this.task = {id:0, text:"", day: "",  reminder: false }
  }

  ngOnInit(): void {
  }
  onDelete(task:TaskModel){
    this.onDeleteTask.emit();
  }
  onToggleTask(task:TaskModel){
    this.onToggleReminder.emit();
  }
}
