import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { GVariables } from '../gvariables';
import { AuthService } from './../../../authentication/services/auth.service';
import { TotalCheckLangComponent } from './../total-check-lang.component';

@Component({
  selector: "app-wpage",
  templateUrl: "./wpage.component.html",
  styleUrls: ["./wpage.component.css", "./wpage.scss"]
})
export class WPageComponent extends TotalCheckLangComponent implements OnInit , TotalCheckLangComponent {
  isLoggedIn: boolean;
  decodedAccessToken: any = {};
  accessTokenExpirationDate: Date = null;
  subscription: Subscription;
  displayName: string;
  title = "Art";
  checkTotalLangV: boolean;

  constructor(private authService: AuthService, public variable: GVariables) {
    super();
    this.checkTotalLangV = variable.checkTotalLangV;
  }

  scrollTopListener: () => void;
  // closeNav: () => void;

  loadPreImg(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {}
}
