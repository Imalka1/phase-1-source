import {Component, OnInit} from '@angular/core';
import {User} from "../../dtos/user";
import "../../../assets/js/login/login.js";
import "../../../assets/js/material-dashboard98f3.js";
import {Router} from "@angular/router";
import {SocketService} from "../../service/socket.service";
import {LoginService} from "../../service/login.service";

declare var loadLogin: any;
declare var loadMaterials: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loggedUser = new User();
  failed: boolean = false;
  passwordVisibility: boolean = false;

  constructor(private router: Router, private socketService: SocketService, private loginService: LoginService) {
    this.socketService.initSocket();
  }

  ngOnInit() {
    loadMaterials();
    loadLogin();
  }

  getLogin(): void {
    this.loginService.getLogin(this.user).subscribe(
      (result) => {
        this.loggedUser = result;
        if (this.loggedUser.authenticate == true) {
          this.failed = false;
          localStorage.clear();
          localStorage.setItem("login", "logged");
          localStorage.setItem("teamId", this.loggedUser.teamId);
          localStorage.setItem("teamPos", this.loggedUser.teamPosition + '');
          this.socketService.sendTeamPos(localStorage.getItem("teamPos"));
          this.router.navigate(['/rules']);
        } else {
          this.failed = true;
        }
      }
    );
  }

  passwordVisible() {
    if (this.passwordVisibility == false) {
      this.passwordVisibility = true;
    } else {
      this.passwordVisibility = false;
    }
  }
}
