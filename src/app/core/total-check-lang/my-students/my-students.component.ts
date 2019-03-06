import { Component, OnInit } from '@angular/core';

interface IStudents {
  name: string;
  year: string;
  // portfolio: img
}

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css']
})
export class MyStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
