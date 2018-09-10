import {Component, OnInit} from '@angular/core';
import "../../../assets/js/countdown_timer.js";
import {SocketService} from "../../service/socket.service";

declare var startCountdownTimer: any;

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  status: Array<boolean> = new Array();
  circle1: Array<boolean> = new Array();
  circle2: Array<boolean> = new Array();
  circle3: Array<boolean> = new Array();
  circle4: Array<boolean> = new Array();
  btnText: string = 'Start';
  started: boolean = false;

  constructor(private socketService: SocketService) {
    this.socketService.initSocket();
    socketService.teamReg.subscribe((value) => {
      if (value.authenticate) {
        this.status[value.teamPosition - 1] = true;
      } else {
        this.status[value.teamPosition - 1] = false;
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
    this.started = true;
    for (let i = 0; i < 20; i++) {
      // this.status[i] = true;
      this.circle1[i] = true;
    }
    this.btnText = 'Restart';
  }
}
