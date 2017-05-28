import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Router } from "@angular/router";

//Firebase Authentication
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  users$:FirebaseListObservable<any>;

  constructor(
    private afAuth:AngularFireAuth, 
    private afDatabase:AngularFireDatabase,
    private router:Router) {
      this.user = afAuth.authState;
      this.users$ = this.afDatabase.list("users");
  }

  emailLogin(email:string, password:string){
    console.log("AuthService::login", email, password);
  }

  facebookLogin(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(userData => this.createUser(userData))
      .catch(function(err){
        console.log("facebookLogin:facebookLogin::err", err);
      })
  }

  createUser(userData){
    //B. Convert the Firebase Promise to an Observable
    const json = userData.user.providerData[0];
    console.log("AuthService::createUser:", json );
    this.users$.push(json);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  reset(){

  }

  register(){

  }

}
