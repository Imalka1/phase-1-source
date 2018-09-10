import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { MainViewComponent } from './views/main-view/main-view.component';
import { RulesComponent } from './views/student-view/rules/rules.component';
import {QuestionComponent} from "./views/student-view/question/question.component";
import {CountdownTimerModule} from "ngx-countdown-timer";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainViewComponent,
    RulesComponent,
    QuestionComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    CountdownTimerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
