import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import SockJS from "sockjs-client"
import * as Stomp from '@stomp/stompjs';
import {Subject} from "rxjs/index";
import {User} from "../dtos/user";
import {HttpClient} from "@angular/common/http";

const URL = "/api/v1/user";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  stompClient;
  teamReg: Subject<User> = new Subject<User>();

  constructor() {
  }

  public initSocket(): void {
    this.socket = new SockJS(environment.backend_url + "/phase1-web-socket");
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.debug = null
    let that = this;
    this.stompClient.connect({}, function () {
      that.stompClient.subscribe('/out/onlineTeam', function (user) {
        if (JSON.parse(user.body).authenticate) {
          let userDto: User = new User();
          userDto.teamPosition = JSON.parse(user.body).teamPosition;
          userDto.authenticate = true;
          that.teamReg.next(userDto);
        }
      });
      that.stompClient.subscribe('/out/offlineTeam', function (user) {
        let userDto: User = new User();
        userDto.teamPosition = JSON.parse(user.body).teamPosition;
        userDto.authenticate = false;
        that.teamReg.next(userDto);
      });
    });
  }

  public startGame(): void {
    this.stompClient.send("/in/start");
  }

  public sendTeamPos(id: string) {
    this.stompClient.send("/in/onlineTeamId", {}, id);
  }
}
