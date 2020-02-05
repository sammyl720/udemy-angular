import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styles: [`
    .light {
      color:white;
    }
  `]
})
export class AssignmentComponent implements OnInit {
  detailStatus = false
  clicks = []
  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.detailStatus = !this.detailStatus
    this.clicks.push(this.clicks.length + 1)
  }

  moreThenFour(click) {
    return click > 4 ? 'blue': 'white'
  }
}
