import { Component, OnInit } from '@angular/core';
import {mainPage} from "app/main-page/main-page";
import {mainPageService} from "./main-page.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 mainPage: mainPage[];

  constructor(private mainService: mainPageService) {
  }

  ngOnInit() {
    this.mainService.getData()
      .subscribe((data) => this.mainPage = data
  );
  }

}
