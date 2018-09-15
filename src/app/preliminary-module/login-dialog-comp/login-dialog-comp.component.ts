import {Component, HostListener, OnInit} from '@angular/core';
import "../../../assets/js/login/login.js";
import "../../../assets/js/material-dashboard98f3.js";
import {UserDto} from "./user-dto";
import {AuthenticatorService} from "../services/authenticator/authenticator.service";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFirestore} from "angularfire2/firestore";

declare var loadLogin: any;
declare var loadMaterials: any;

@Component({
  selector: 'app-login-dialog-comp',
  templateUrl: './login-dialog-comp.component.html',
  styleUrls: ['./login-dialog-comp.component.css']
})
export class LoginDialogCompComponent implements OnInit {

  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler($event) {
    // this.loginService.loggedOut();
  }

  user: UserDto = new UserDto();
  loggedUser = new UserDto();
  failed: boolean = false;
  passwordVisibility: boolean = false;

  constructor(private loginService: AuthenticatorService, private db: AngularFireDatabase, private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
  }

  ngOnInit() {
    loadMaterials();
    loadLogin();
    this.logout();
  }

  passwordVisible() {
    if (this.passwordVisibility == false) {
      this.passwordVisibility = true;
    } else {
      this.passwordVisibility = false;
    }
  }

  getLogin() {
    return this.afAuth.auth.signInWithEmailAndPassword(this.user.teamId, this.user.teamPassword)
      .then(credential => {
        this.db.list('users/').valueChanges().subscribe((result) => {
          for (let i = 0; i < JSON.parse(JSON.stringify(result)).length; i++) {
            if (JSON.parse(JSON.stringify(result))[i]['email'] == this.user.teamId) {
              let pos: number = i + 1;
              const itemRef = this.db.object('users/' + pos + '/');
              sessionStorage.setItem('pos', '' + pos);
              itemRef.update({authentication: true});
              this.router.navigate(['/rules']);
            }
          }
        });
        this.failed = false;
      })
      .catch(error => {
        this.failed = true;
      });
  }

  logout() {
    const itemRef = this.db.object('users/' + sessionStorage.getItem('pos') + '/');
    itemRef.update({authentication: false});
  }
}
