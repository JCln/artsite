import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcademyPortraitComponent } from './academy-portrait/academy-portrait.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { InfoComponent } from './info/info.component';
import { PTComponent } from './pt/pt.component';
import { VideoListComponent } from './video-list/video-list.component';
import { WPageComponent } from './wpage/wpage.component';

const routes: Routes = [
  { path: "WPage", component: WPageComponent },

  { path: "addNote", component: AddNoteComponent },
  { path: "videoList", component: VideoListComponent },
  { path: "academyPortrait", component: AcademyPortraitComponent },
  { path: "Info", component: InfoComponent },
  { path: "PT", component: PTComponent },
  { path: "", redirectTo: "WPage", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotalCheckLangRoutingModule {}
