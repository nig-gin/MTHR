import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

constructor(
  private router: Router
) {
}
  loginForm = new FormGroup({
    email: new FormControl(null,
      [Validators.required,
        Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required])
  });
// get email() {return this.loginForm.get('email'); }
// get password() {return this.loginForm.get('password'); }

  onSubmit() {
    console.warn(this.loginForm.value);
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
    email: new FormControl(null,
      [Validators.required,
        Validators.email]),
      password: new FormControl('', [
      Validators.minLength(6),
      Validators.required])
  });
  }
  login() {
    return console.log('Auth_ok');

    this.router.navigate(['/manager', 'jurnal']);
  }


}
