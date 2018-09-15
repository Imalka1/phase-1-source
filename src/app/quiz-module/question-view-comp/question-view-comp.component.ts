import { Component, OnInit } from '@angular/core';
import "../../../assets/js/countdown_timer.js";
import "../../../assets/js/material-dashboard98f3.js";
import {NgForm} from "@angular/forms";

declare var startCountdownTimer: any;
declare var loadMaterials: any;

@Component({
  selector: 'app-question-view-comp',
  templateUrl: './question-view-comp.component.html',
  styleUrls: ['./question-view-comp.component.css']
})
export class QuestionViewCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    loadMaterials();
    startCountdownTimer();
  }

  /*Set gender radio options*/
  setGender(value: string) {
    // this.student.gender = value;
    // this.saveToLocalStorage();
  }

  /*Save student*/
  saveStudent(f: NgForm): void {
    // if (this.checkInputs(f)) {
    //   if (this.loginStatus() == 1) {
    //
    //   } else {
    //     this.nextPage();
    //   }
    // }
  }

}
