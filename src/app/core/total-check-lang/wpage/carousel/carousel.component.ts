import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    { url: "../../../../../assets/corousel1CMP.png" },
    { url: "../../../../../assets/carouselh2.jpg"},
    { url: "../../../../../assets/corousel2.jpg" }
  ];
  showDots = false;
  dotColor = "#FFF";
  showCaptions = true;
  autoPlay = true;
  autoPlayInterval = 7777;
  stopAutoPlayOnSlide = false;

  constructor() {}

  ngOnInit() {}
}
// tslint:disable-next-line:max-line-length
    // { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '#config' },
    // tslint:disable-next-line:max-line-length
