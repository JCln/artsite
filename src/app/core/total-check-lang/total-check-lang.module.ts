import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AcademyPortraitComponent } from './academy-portrait/academy-portrait.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { GVariables } from './gvariables';
import { InfoComponent } from './info/info.component';
import { PTComponent } from './pt/pt.component';
import { TotalCheckLangRoutingModule } from './total-check-lang-routing.module';
import { TotalCheckLangComponent } from './total-check-lang.component';
import { VideoListComponent } from './video-list/video-list.component';
import { CarouselComponent } from './wpage/carousel/carousel.component';
import { WPageComponent } from './wpage/wpage.component';

@NgModule({
  imports: [
    CommonModule,
    TotalCheckLangRoutingModule,
    FormsModule,
    SlideshowModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ScrollingModule,
    RouterModule
  ],
  exports: [TotalCheckLangComponent, AddNoteComponent, VideoListComponent, AcademyPortraitComponent],
  declarations: [
    WPageComponent,
    AddNoteComponent,
    VideoListComponent,
    TotalCheckLangComponent,
    AcademyPortraitComponent,
    CarouselComponent,
    PTComponent,
    InfoComponent
  ],
  providers: [GVariables]
})
export class TotalCheckLangModule {}
