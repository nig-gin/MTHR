import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root'})

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  hide = true;
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

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  onSubmit() {
    console.warn(this.loginForm.value);
  }
  ngOnInit(): void {  }
  login() {
    this.router.navigate(['/manager', 'journal']);
    return console.log('Auth_ok');
  }



  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Введите Email';
    }

    return this.email.hasError('email') ? 'Введите коректный Email' : '';
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Введите пароль';
    }

    return this.password.hasError('email') ? 'Введите коректный пароль' : '';
  }

}
