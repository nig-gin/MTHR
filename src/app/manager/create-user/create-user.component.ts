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
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.minLength(8) ,
        Validators.required]) ,
      phone: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
    });
  }


  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log('fulln=Name', this.form.value.fullName);
    const user: UserSt = {
      fullName: this.form.value.fullName,
      username: this.form.value.username,
      password: this.form.value.password,
      phone: this.form.value.phone,
      position: this.form.value.position,
    };
    this.adminRestApiService.create(user).subscribe(() => {
      this.form.reset();
    });


  }
}
