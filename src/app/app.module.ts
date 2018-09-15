import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {CountdownTimerModule} from "ngx-countdown-timer";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {environment} from "../environments/environment";
import { OverviewCompComponent } from './overview-module/overview-comp/overview-comp.component';
import { LoginDialogCompComponent } from './preliminary-module/login-dialog-comp/login-dialog-comp.component';
import { RulesRegulationCompComponent } from './preliminary-module/rules-regulation-comp/rules-regulation-comp.component';
import { TimeExceededCompComponent } from './quiz-module/time-exceeded-comp/time-exceeded-comp.component';
import { CompetitionOverCompComponent } from './quiz-module/competition-over-comp/competition-over-comp.component';
import {QuestionViewCompComponent} from "./quiz-module/question-view-comp/question-view-comp.component";
import {AuthenticatorService} from "./preliminary-module/services/authenticator/authenticator.service";
import {OverviewService} from "./overview-module/services/overview.service";

@NgModule({
  declarations: [
    AppComponent,
    OverviewCompComponent,
    LoginDialogCompComponent,
    RulesRegulationCompComponent,
    QuestionViewCompComponent,
    TimeExceededCompComponent,
    CompetitionOverCompComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    CountdownTimerModule.forRoot(),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestore
  ],
  providers: [AuthenticatorService,OverviewService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
