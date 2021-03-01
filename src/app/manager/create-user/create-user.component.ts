import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminRestApiService} from '../shared/components/services/adminRestApi.service';
import {UserSt} from '../../shared/object/user-st';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  //
  form!: FormGroup;

  //
  //
  constructor(
    private adminRestApiService: AdminRestApiService,

  ) { }
  //
  ngOnInit(): void {
    if (this.form.invalid) {
      return;
    }
 this.form = new FormGroup({
  fullName: new FormControl(null, Validators.required),
  categoria: new FormControl(null, Validators.required),
  username: new FormControl(null, Validators.required),
  password: new FormControl(null, Validators.required),
  email: new FormControl(null, Validators.required),
  phone: new FormControl(null, Validators.required),
  promt: new FormControl(null, Validators.required),
  });
    const user: UserSt = {
      fullName: this.form.value.fullName,
      categoria: this.form.value.categoria,
      username: this.form.value.username,
      password: this.form.value.password,
      email: this.form.value.email,
      phone: this.form.value.phone,
      promt: this.form.value.promt
    };
    // this.adminRestApiService.create(user).subscribe(() => {
    //   this.form.reset();
    // });
  }
  // submit() {
  //   if (this.form.invalid){
  //     return;
  //   }

    // const user: UserSt = {
    // fullName: this.form.value.fullName,
    // categoria: this.form.value.categoria,
    // username: this.form.value.username,
    // password: this.form.value.password,
    // email: this.form.value.email,
    // phone: this.form.value.phone,

  // };
    // this.this.adminRestApiService.create(user).subscribe(() => {
    //   this.form.reset();
    // });
  // }
  submit(){
    console.log(this.form);
  }
}
