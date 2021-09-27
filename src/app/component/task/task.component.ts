import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../../TaskModel'
import {Tasks} from '../../Mock-task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: TaskModel[] = Tasks;
  constructor() { }

  ngOnInit(): void {
  }

}
