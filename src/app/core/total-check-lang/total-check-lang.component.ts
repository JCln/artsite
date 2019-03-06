import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-total-check-lang",
  templateUrl: "./total-check-lang.component.html",
  styleUrls: ["./total-check-lang.component.css"]
})
export class TotalCheckLangComponent implements OnInit {
  ngOnInit() {

  }
  scrollTopListener = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return;
  }
  // closeNav = () => {
  //   document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("button-toggler").style.marginTop = "8rem";
  //   this.scrollTopListener();
  // }
}
