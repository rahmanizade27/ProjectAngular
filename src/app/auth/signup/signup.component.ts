import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoginMode = true;
  constructor( private authService: AuthService
    ) { }

    onSwitchMode(){
      this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form:NgForm){
      if(!form.valid){
        return;
      }
      const username =form.value.userName;
      const password = form.value.password;

      if(this.isLoginMode){
        //das
      }
      else{
        this.authService.registerUser(username,password).subscribe(
          resData =>{
            console.log(resData);
          },
          error =>{
            console.log(error);
          }
        )
      }
     

      form.reset;
    }
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
