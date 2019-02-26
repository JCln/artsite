import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
    // SharedRoutingModule
  ],
  declarations: [
    // LoaderSpinnerComponent
  ],
  exports: [
    // LoaderSpinnerComponent,
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        /* All of your services here. It will hold the services needed by `itself`. */
      ]
    };
  }
}
