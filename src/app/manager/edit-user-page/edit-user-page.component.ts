import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AdminRestApiService} from '../shared/components/services/adminRestApi.service';
import {switchAll, switchMap} from 'rxjs/operators';
import {UserSt} from '../../shared/object/user-st';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {patchTsGetExpandoInitializer} from '@angular/compiler-cli/ngcc/src/packages/patch_ts_expando_initializer';

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  user!: UserSt;
  submitted = false;
  confirm = false;
  uSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private adminRestApiService: AdminRestApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.adminRestApiService.getById(params.id);
        })
      ).subscribe((user: UserSt) => {
        this.form = new FormGroup({
          id: new FormControl(user.id),
          fullName: new FormControl(user.fullname, Validators.required),
          position: new FormControl(null, Validators.required),
          username: new FormControl(user.username, Validators.required),
          password: new FormControl(user.password, [
            Validators.minLength(8) ,
            Validators.required]) ,
          email: new FormControl(null, Validators.required),
          phone: new FormControl(user.phone, Validators.required),
          prompt: new FormControl(null, Validators.required),
        });
    });
  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }

  submit() {
  //  console.log(this.user.id);
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.uSub = this.adminRestApiService.update({
      ...this.user,
      id: this.form.value.id,
      fullname: this.form.value.fullName,
      username: this.form.value.username,
      password: this.form.value.password,
      phone: this.form.value.phone,
      position: this.form.value.position
    }).subscribe(() => {
      this.submitted = false;

    });

  }
}
