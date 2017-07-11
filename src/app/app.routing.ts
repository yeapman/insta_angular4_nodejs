import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ModuleWithProviders} from "@angular/core";
import {MainPageComponent} from "./main-page/main-page.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const approuting: Routes = [
  {path: '', component: AppComponent},
  {path: 'dashboard', component: MainPageComponent},
  {path: 'sign-up', component: SignUpComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(approuting);
