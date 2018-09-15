import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private db: AngularFireDatabase) { }

  // setOnline(){
  //   this.db.list('users/').valueChanges().subscribe((result) => {
  //     console.log(result)
  //   });;
  // }
}
