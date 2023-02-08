import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }
ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      mobile: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  get f(){  
    return this.signupForm.controls;  
  }  
  signup(){
    this._http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
      alert("registration successfully");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },
    err=>{
      alert("somthing went wrong");
    })
  }
}
