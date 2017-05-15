import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ModuleWithProviders} from "@angular/core";
import {MainPageComponent} from "./main-page/main-page.component";

const approuting: Routes = [
  {path: '', component: AppComponent},
  {path: 'main', component: MainPageComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(approuting);
