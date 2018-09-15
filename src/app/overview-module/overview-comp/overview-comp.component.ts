import {Component, OnInit} from '@angular/core';
import "../../../assets/js/countdown_timer.js";
import {OverviewService} from "../services/overview.service";
import {AngularFireDatabase} from "angularfire2/database";

declare var startCountdownTimer: any;
declare var getHours: any;
declare var getMinutes: any;
declare var getSeconds: any;

@Component({
  selector: 'app-overview-comp',
  templateUrl: './overview-comp.component.html',
  styleUrls: ['./overview-comp.component.css']
})
export class OverviewCompComponent implements OnInit {

  status: Array<boolean> = new Array();
  circle1: Array<boolean> = new Array();
  circle2: Array<boolean> = new Array();
  circle3: Array<boolean> = new Array();
  circle4: Array<boolean> = new Array();
  btnText: string = 'Start';
  started: boolean = false;

  constructor(private overviewService: OverviewService, private db: AngularFireDatabase) {
    this.db.list('users/').valueChanges().subscribe((result) => {
      for (let i in JSON.parse(JSON.stringify(result))) {
        if (JSON.parse(JSON.stringify(result))[i]['authentication']) {
          this.status[JSON.parse(JSON.stringify(result))[i]['position'] - 1] = true;
        }else{
          this.status[JSON.parse(JSON.stringify(result))[i]['position'] - 1] = false;
        }
      }
    });
  }

  ngOnInit() {
    // startCountdownTimer();
    for (let i = 0; i < 20; i++) {
      this.status.push(false);
      this.circle1.push(false);
    }
    for (let i = 0; i < 10; i++) {
      this.circle2.push(false);
    }
    for (let i = 0; i < 8; i++) {
      this.circle3.push(false);
    }
    for (let i = 0; i < 4; i++) {
      this.circle4.push(false);
    }
  }

  readyStatus() {
    for (let i = 0; i < 20; i++) {
      if (this.status[i] == false) {
        return false;
      }
    }
    return true;
  }

  startGame() {
    startCountdownTimer();
    console.log(getMinutes());
    this.started = true;
    for (let i = 0; i < 20; i++) {
      // this.status[i] = true;
      this.circle1[i] = true;
    }
    this.btnText = 'Restart';
  }
}
