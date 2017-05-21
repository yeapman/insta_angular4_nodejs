import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import { MainPageComponent } from './main-page/main-page.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import {mainPageService} from "./main-page/main-page.service";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TopMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [mainPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
