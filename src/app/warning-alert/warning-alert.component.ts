import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
    div{
      color:red;
      border:1px solid red;
      padding:1rem;
      display:block;
      margin:1rem auto;
      background:lightcoral;
      border-radius:5px;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
