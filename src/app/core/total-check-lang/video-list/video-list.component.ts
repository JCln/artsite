import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { config, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GVariables } from '../gvariables';
import { CommonService } from './../../../common.service';
import { Tvideos } from './videos';



@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css", "./video-list.component.scss"]
})
export class VideoListComponent implements OnInit, AfterViewInit, OnDestroy {
  checkTotalLangV: boolean;

  id: string;

  videolist: any[] = Tvideos;
  free = "رایگان";
  sale = "خرید";

  config = {
    userName: 'yourusername',
    password: 'yourpassword',
    server: 'yourserver.database.windows.net',
    // If you are on Microsoft Azure, you need this:
    options: {encrypt: true, database: 'AdventureWorks'}
};


  constructor(
    public variable: GVariables,
    private commonService: CommonService,
    private httpclient: HttpClient
  ) {}

  ngAfterViewInit() {
  }

  ngOnDestroy() {}

  ngOnInit() {
    console.log(this.get());

    try {
      this.videolist = Tvideos;
    } catch (e) {
      console.log(e);
    }
  }
  edit = function(kk) {
    this.id = kk._id;
    this.name = kk.name;
    this.address = kk.address;
    this.valbutton = "Update";
  };

  delete = function(id) {
    this.commonService.deleteUser(id).subscribe(
      data => {
        alert(data.data);
        this.ngOnInit();
      },
      error => (this.errorMassage = error)
    );
  };

  ImgErrorHandler(event) {
    event.target.src = "../../../../assets/p4.jpg";
  }
  getItemFromServer() {
    return (this.videolist = Tvideos);
  }
  trackByFn(index, item) {
    return index;
  }
  addOrRemoveVideos() {
    document.getElementById("surprise").innerHTML = "";
  }
  get(): Observable<any> {
    return this.httpclient.get('http://81.90.148.25/Auth/account/login').pipe(

        catchError(this.handleError(`get`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {

      console.error(error);

      // this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
     };
   }

}

// let addIframeSrc = () => {
//   const add = document.getElementById('').innerHTML;

// };
