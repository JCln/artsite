import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_CONFIG, AppConfig } from '../authentication/services/app.config';
import { SidenavComponent } from '../core/sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { TotalCheckLangModule } from './total-check-lang/total-check-lang.module';

@NgModule({
  imports: [TotalCheckLangModule, CommonModule,  RouterModule],
  exports: [
    // components that are used in app.component.ts will be listed here.
    SidenavComponent,
    HeaderComponent,
  ],
  declarations: [
    // components that are used in app.component.ts will be listed here.
    SidenavComponent,
    HeaderComponent,
  ],

  providers: [

    /* ``No`` global singleton services of the whole app should be listed here anymore!
       Since they'll be already provided in AppModule using the `tree-shakable providers` of Angular 6.x+ (providedIn: 'root').
       This new feature allows cleaning up the providers section from the CoreModule.
       But if you want to provide something with an InjectionToken other that its class, you still have to use this section.
    */
    {
      provide: APP_CONFIG,
      useValue: AppConfig
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: XsrfInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (config: ApiConfigService) => () => config.loadApiConfig(),
    //   deps: [ApiConfigService],
    //   multi: true
    // }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule should be imported ONLY in AppModule.');
    }
  }
}
