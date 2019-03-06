import { Component, OnInit } from '@angular/core';

import { GVariables } from '../gvariables';

@Component({
  selector: 'app-academy-portrait',
  templateUrl: './academy-portrait.component.html',
  styleUrls: ['./academy-portrait.component.css']
})
export class AcademyPortraitComponent implements OnInit {

  constructor(public variable: GVariables) { }

  ngOnInit() {
  }

}
