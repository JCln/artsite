import { Component } from '@angular/core';

let fixed_top: HTMLElement;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  colorPickerCheck = (color: string) => {
    fixed_top = document.getElementById("fixed-top");

    fixed_top.classList.remove("bg-warning");
    fixed_top.classList.remove("bg-dark");
    fixed_top.classList.remove("bg-danger");
    fixed_top.classList.remove("bg-info");

    return fixed_top.classList.add(color);
  }

  getFixedTopColor = (): HTMLElement => {
    return fixed_top;
  }
}
