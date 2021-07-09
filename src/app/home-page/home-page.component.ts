import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {JournalRestApiService} from "../manager/shared/components/services/journalRestApi.service";
import countries from "../home-page/countries.json"

@Injectable({ providedIn: 'root'})

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  hide = true;
  title = 'json-file-read-angular';
  public countryList:{name:string, code:string}[] = countries;

constructor(
  private router: Router,
  private rest: JournalRestApiService,

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
  ngOnInit(): void {



  }
  jsontest(){
    console.log('database:', this.countryList)
  }
  login() {
    this.router.navigate(['/manager', 'journal']);
    return console.log('Auth_ok');
  }

  // ngOnInit(): void {
  //   this.restApiService.getAll().subscribe(users => {
  //     this.users = users;
  //     console.log('User: ', this.users );
  //   });

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
