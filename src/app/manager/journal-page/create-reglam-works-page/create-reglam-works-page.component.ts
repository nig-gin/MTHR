import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JournalRestApiService} from '../../shared/components/services/journalRestApi.service';
import {UserSt} from '../../../shared/object/user-st';
import {jourInterface} from '../../../shared/object/interfeces';
import {Data} from '@angular/router';

@Component({
  selector: 'app-create-reglam-works-page',
  templateUrl: './create-reglam-works-page.component.html',
  styleUrls: ['./create-reglam-works-page.component.scss']
})
export class CreateReglamWorksPageComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private journalRestApiService: JournalRestApiService,

    ) {  }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      hour: new FormControl(null, Validators.required),
      caid: new FormControl(null, Validators.required),
      catitle: new FormControl(null, Validators.required),
      mexanism: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),

    });
  }


  submit() {
    // if (this.form.invalid) {
    //   return;
    // }

    const reglamWork: jourInterface = {
      title: this.form.value.title,
      hour: this.form.value.hour,
      date: new Date(),

      category: {
        id: this.form.value.caid,
        title: this.form.value.catitle,
      },
      mexanism: this.form.value.mexanism,
      user: this.form.value.user,
    };
    this.journalRestApiService.create(reglamWork).subscribe(() => {
      this.form.reset();
    });
  }
}
