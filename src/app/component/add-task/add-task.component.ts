import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskModel } from 'src/app/TaskModel';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@Output() addTask: EventEmitter<TaskModel> = new EventEmitter();

text: string ;
day:string;
reminder:boolean;

  constructor() {
    this.text = '';
    this.day = '';
    this.reminder = false;
   }

  ngOnInit(): void {
  }

onAddTask(){
  if(!this.text){
    alert("Please add new Text!!");
    return;
  }
  const newTask =  {
    text : this.text,
    day : this.day,
    reminder:this.reminder
  }
  this.addTask.emit(newTask);
  this.clearForm();
}


clearForm(){
  this.text = '';
  this.day = '';
  this.reminder = false;
}
}
