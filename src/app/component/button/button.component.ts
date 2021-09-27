import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() btnName:string ;
@Input() bgColor:string;
@Input() color:string;
@Output() btnClick = new EventEmitter();

  constructor() { 
    this.btnName = '';
    this.bgColor = '';
    this.color = '';
  }

  ngOnInit(): void {
  }
  btnClicked(){
this.btnClick.emit();
  }

}
