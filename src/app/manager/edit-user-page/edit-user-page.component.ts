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
          return this.adminRestApiService.getById(params['id']);
        })
      ).subscribe((user: UserSt) => {
        this.form = new FormGroup({
          id: new FormControl(user.id),
          fullName: new FormControl(user.fullName, Validators.required),
          categoria: new FormControl(user.categoria, Validators.required),
          username: new FormControl(user.username, Validators.required),
          password: new FormControl(user.password, [
            Validators.minLength(8) ,
            Validators.required]) ,
          email: new FormControl(user.email, Validators.required),
          phone: new FormControl(user.phone, Validators.required),
          prompt: new FormControl(user.prompt, Validators.required),
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
      fullName: this.form.value.fullName,
      categoria: this.form.value.categoria,
      username: this.form.value.username,
      password: this.form.value.password,
      email: this.form.value.email,
      phone: this.form.value.phone,
      prompt: this.form.value.prompt
    }).subscribe(() => {
      this.submitted = false;

    });

  }
}