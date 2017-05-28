import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs/Rx";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from "../../security/auth.service"

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email:    ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signIn(){
    console.log("SignInComponent:signIn");
    const formValue = this.form.value;
    //this.authService.emailLogin(formValue.email, formValue.password);
    this.authService.facebookLogin();
  }

  isValidEmail(){
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const val = this.form.value;
    const isMatched = val && val.email && regEx.test(val.email);
    return isMatched;
  }
}
