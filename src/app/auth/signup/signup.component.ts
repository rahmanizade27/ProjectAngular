import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//  form: FormGroup;
  constructor(
    // private router: Router,
    // private authService: AuthService,
    // private formBuilder: FormBuilder,

    ) { }

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]});
  } 
  // get f() { return this.form.controls; }

  onSignUp(){
    // this.authService.registerUser(this.form.value).pipe(first)

  }
  
}
