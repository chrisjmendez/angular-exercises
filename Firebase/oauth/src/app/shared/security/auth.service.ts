//https://firebase.google.com/docs/database/web/lists-of-data

import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Router } from "@angular/router";

//Firebase Authentication
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { User } from '../models/user';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  // Related to the entire /users node w/i Firebase
  users$:FirebaseListObservable<any>;
  // Relates to a specific /users/user w/i Firebase
  user$:FirebaseObjectObservable<any>;

  constructor(
    private afAuth:AngularFireAuth, 
    private afDatabase:AngularFireDatabase,
    private router:Router) {
      this.user = afAuth.authState;
      this.users$ = this.afDatabase.list('users')
      this.user$ = this.afDatabase.object('users')
  }

  emailLogin(email:string, password:string){
    console.log("AuthService::login", email, password);
  }

  facebookLogin(){
      //https://developers.facebook.com/docs/facebook-login/permissions
      const scopes = [ 'id', 'name', 'address', 'age_range', 'location', 'locale', 'timezone',
					'photos', 'about', 'bio', 'birthday', 'context', 'currency', 'devices', 'education', 
					'email', 'gender', 'hometown', 'interested_in', 'is_verified', 'languages', 'name_format', 
					'payment_pricepoints', 'political', 'relationship_status', 'religion', 'significant_other', 
          'verified', 'website', 'work', 'cover', 'movies', 'music', 'television'
    ];

    const provider = new firebase.auth.FacebookAuthProvider()
    //scopes.forEach(scope => provider.addScope(scope) )
    provider.addScope('email');
    provider.addScope('public_profile');
    provider.addScope('user_actions.music');
    provider.addScope('user_friends');

    this.afAuth.auth.signInWithPopup(provider)
      .then(userData => {
        const json = userData.user.providerData[0];
        const token = (userData.credential) ? userData.credential.accessToken : "NO ACCESS TOKEN";
        console.log(token)
        //this.createUser(json)
        //this.findUser(json.uid);
        //this.redirectUser("/dashboard");
      })
      .catch(function(err){
        console.log("facebookLogin:facebookLogin::err", err);
      })
  }

  //Only Works on Facebook users
  findUser(uid):boolean{
    this.user$ = this.afDatabase.object("users"), {
      query: {
        orderByChild: 'uid',
        limitToFirst: 1,
        startAt: uid,
        endAt: uid
      }
    }

    this.user$.subscribe(result => {
      console.log( result )
    })
    return false
  }


  createUser(userData){
    //B. Convert the Firebase Promise to an Observable
    console.log("AuthService::createUser:", userData );
    this.users$.push(userData);
  }


  logout(){
    this.afAuth.auth.signOut();
  }

  reset(){

  }

  register(){

  }

  redirectUser(path){
    this.router.navigate([path])
  }
}
