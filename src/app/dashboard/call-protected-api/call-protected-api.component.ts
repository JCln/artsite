import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { APP_CONFIG, IAppConfig } from './../../authentication/services/app.config';
import { AuthService } from './../../authentication/services/auth.service';

@Component({
  selector: 'app-call-protected-api',
  templateUrl: './call-protected-api.component.html',
  styleUrls: ['./call-protected-api.component.css']
})
export class CallProtectedApiComponent implements OnInit {

  isAdmin = false;
  isUser = false;
  result: any;

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig,
  ) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthUserInRole('Admin');
    this.isUser = this.authService.isAuthUserInRole('User');
  }

  callMyProtectedAdminApiController() {
    this.httpClient
      .get(`${this.appConfig.apiEndpoint}/MyProtectedAdminApi`)
      .pipe(
        map(response => response || {}),
        catchError((error: HttpErrorResponse) => throwError(error))
      )
      .subscribe(result => {
        this.result = result;
      });
  }

  callMyProtectedApiController() {
    this.httpClient
      .get(`${this.appConfig.apiEndpoint}/MyProtectedApi`)
      .pipe(
        map(response => response || {}),
        catchError((error: HttpErrorResponse) => throwError(error))
      )
      .subscribe(result => {
        this.result = result;
      });
  }

  callMyProtectedEditorsApiController() {
    this.httpClient
      .get(`${this.appConfig.apiEndpoint}/MyProtectedEditorsApi`)
      .pipe(
        map(response => response || {}),
        catchError((error: HttpErrorResponse) => throwError(error))
      )
      .subscribe(result => {
        this.result = result;
      });
  }
}
