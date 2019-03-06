import { Component, OnInit } from '@angular/core';

import { GVariables } from './../total-check-lang/gvariables';
import { TotalCheckLangComponent } from './../total-check-lang/total-check-lang.component';

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent extends TotalCheckLangComponent implements OnInit {
  show = false;

  scrollTopListener: () => void;
  closeNav: () => void;

  constructor(public variable: GVariables) {
    super();
  }
  ngOnInit() {}

  openNav() {
    document.getElementById("mySidebar").style.width = "25%";
    const windowSize = screen.width;
    if (windowSize <= 890) {
      document.getElementById("mySidebar").style.width = "100%";
    }

    document.getElementById("button-toggler").style.marginTop = "-8rem";
  }

}
