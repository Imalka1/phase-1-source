import {Injectable} from '@angular/core';
import {User} from "../dtos/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from '../../environments/environment';

const URL = "/api/v1/user";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {
  }

  getLogin(user: User): Observable<User> {
    return this.http.post<User>(environment.backend_url + URL + "/authenticate", user);
  }
}
