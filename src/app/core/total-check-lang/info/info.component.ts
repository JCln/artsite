import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css", "./info.component.scss"]
})
export class InfoComponent implements OnInit {
  size = 20;
  color = false;

  ngOnInit() {}
}
