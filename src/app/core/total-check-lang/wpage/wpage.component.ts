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
  title = "Art";
  checkTotalLangV: boolean;

  isLoggedIn: boolean;
  decodedAccessToken: any = {};
  accessTokenExpirationDate: Date = null;
  subscription: Subscription;
  displayName: string;

  scrollTopListener: () => void;
  closeNav: () => void;

  loadPreImg(): void {
    throw new Error("Method not implemented.");
  }



  constructor(private authService: AuthService, public variable: GVariables) {
    super();
    this.checkTotalLangV = variable.checkTotalLangV;
  }

  OnInit() {
    // try {
    //   this.decodedAccessToken = this.authService.getDecodedAccessToken();
    //   console.log(this.decodedAccessToken);
    //   this.accessTokenExpirationDate = this.authService.getAccessTokenExpirationDateUtc();
    //   console.log(
    //     this.accessTokenExpirationDate + 'access token expiration date'
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  }

  // ngOnInit() {
  //   this.subscription = this.authService.authStatus$.subscribe(status => {
  //     this.isLoggedIn = status;
  //     console.log(this.isLoggedIn);
  //     if (status) {
  //       this.displayName = this.authService.getDisplayName();
  //       console.log(this.displayName + status);
  //     }
  //   });
  // }

  // checkLang() {
  //   this.variable.checkTotalLangV = !this.checkTotalLangV;
  // }
  // ngOnChanges() {
  //   // this.checkTotalLangV = !this.checkTotalLangV;
  //   this.variable.checkTotalLangV = !this.checkTotalLangV;
  // }

  // ngOnDestroy() {
  // prevent memory leak when component is destroyed
  //   this.subscription.unsubscribe();
  // }

  // logout() {
  //   this.authService.logout(true);
  // }

  ngOnInit() {}
}
