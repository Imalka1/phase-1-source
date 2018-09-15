import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireObject} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {UserDto} from "../../login-dialog-comp/user-dto";
import {Observable, of} from "rxjs/index";
import {switchMap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  loggedUser: Observable<any>;
  user: Observable<UserDto>;

  constructor(private db: AngularFireDatabase) {
  }
}
