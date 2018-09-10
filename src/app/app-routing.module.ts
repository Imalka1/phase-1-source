import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./views/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {RulesComponent} from "./views/student-view/rules/rules.component";
import {MainViewComponent} from "./views/main-view/main-view.component";
import {QuestionComponent} from "./views/student-view/question/question.component";

const appRoutes: Routes = [
  // {
  //   path: "main", component: MainComponent,
  //   children: [
  //     {path: "dashboard", component: DashboardComponent},
  //     {
  //       path: "student-reg", component: StudentRegComponent,
  //       children: [
  //         {path: "student-details", component: StudentDetailsComponent},
  //         {path: "student-registrations", component: StudentRegistrationsComponent},
  //         {path: "semester-registrations", component: SemesterRegistrationComponent, canActivate: [LoginGuard]},
  //         {path: "semester-payments", component: SemesterPaymentsComponent},
  //         {path: "student-summary", component: StudentSummaryComponent},
  //       ]
  //     },
  //     {
  //       path: "lecturers-subjects", component: LecturerSubjectsRegistrationsComponent, canActivate: [LoginGuard],
  //       children: [
  //         {path: "lecturer-details", component: LecturerDetailsComponent},
  //         {path: "subject-details", component: SubjectsDetailsComponent},
  //       ]
  //     },
  //   ]
  // },
  {path: "main", component: MainViewComponent},
  {path: "rules", component: RulesComponent},
  {path: "question", component: QuestionComponent},
  {path: "login", component: LoginComponent},
  {path: "", pathMatch: "full", redirectTo: "/login"},
  // {path: "main", pathMatch: "full", redirectTo: "/main/dashboard"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
