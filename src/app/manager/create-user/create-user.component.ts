import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminRestApiService} from '../shared/components/services/adminRestApi.service';
import {UserSt} from '../../shared/object/user-st';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
 form!: FormGroup;
  constructor(
    private adminRestApiService: AdminRestApiService,
  ) {
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      categoria: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.minLength(8) ,
        Validators.required]) ,
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      prompt: new FormControl(null, Validators.required),
    });
  }


  submit() {
    if (this.form.invalid) {
      return;
    }

    const user: UserSt = {
      fullname: this.form.value.fullName,
      username: this.form.value.username,
      password: this.form.value.password,
      phone: this.form.value.phone,
      position: this.form.value.categoria,
    };
    this.adminRestApiService.create(user).subscribe(() => {
      this.form.reset();
    });


  }
}
