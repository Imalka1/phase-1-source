import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginDialogCompComponent} from "./preliminary-module/login-dialog-comp/login-dialog-comp.component";
import {QuestionViewCompComponent} from "./quiz-module/question-view-comp/question-view-comp.component";
import {RulesRegulationCompComponent} from "./preliminary-module/rules-regulation-comp/rules-regulation-comp.component";
import {OverviewCompComponent} from "./overview-module/overview-comp/overview-comp.component";
import {TimeExceededCompComponent} from "./quiz-module/time-exceeded-comp/time-exceeded-comp.component";
import {CompetitionOverCompComponent} from "./quiz-module/competition-over-comp/competition-over-comp.component";

const appRoutes: Routes = [
  {path: "main", component: OverviewCompComponent},
  {path: "rules", component: RulesRegulationCompComponent},
  {path: "question", component: QuestionViewCompComponent},
  {path: "time-exceeded", component: TimeExceededCompComponent},
  {path: "competition-over", component: CompetitionOverCompComponent},
  {path: "login", component: LoginDialogCompComponent},
  {path: "", pathMatch: "full", redirectTo: "/login"},
  // {path: "main", pathMatch: "full", redirectTo: "/main/dashboard"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
