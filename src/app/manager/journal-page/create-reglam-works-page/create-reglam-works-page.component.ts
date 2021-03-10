import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JournalRestApiService} from '../../shared/components/services/journalRestApi.service';
import {UserSt} from '../../../shared/object/user-st';
import {jourInterface} from '../../../shared/object/interfeces';
import {Data} from '@angular/router';


export interface test {
  mexanism: {
    id: number;
    hour: number;
    title: string;
  };

  title: string;
  hour: number;
  date: Data;

  category: {
    id: number;
    title: string;
      };
  // user: {
  //   id?: number;
  //   fullname: string;
  //   password: string;
  //   phone: string;
  //   position: string;
  //   username: string;
  // };
}
@Component({
  selector: 'app-create-reglam-works-page',
  templateUrl: './create-reglam-works-page.component.html',
  styleUrls: ['./create-reglam-works-page.component.scss']
})
export class CreateReglamWorksPageComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private journalRestApiService: JournalRestApiService,
  ) {
  }

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

    const reglamWork: test = {
      title: this.form.value.title,
      hour: this.form.value.hour,
      date: new Date(),
      category: {
        id: 1,
        title: 'vent',
      },
      mexanism: {
        id: 1,
        title: 'fan1',
        hour: 10,
      }
    };
    console.log('post req:', reglamWork);
    this.journalRestApiService.create(reglamWork).subscribe(() => {
      this.form.reset();
      //   },
    // (err: HttpErrorResponse) => {
    //   this.isLoginError = true;
    //   console.log(err);
    //   this.restart = false;   /*VITALIY*/
    //   setTimeout(() => {
    //     this.restart = true;
    //   }, 4000);
     });
  }
}





  //   const reglamWork: jourInterface = {
  //     title: this.form.value.title,
  //     hour: this.form.value.hour,
  //     date: new Date(),
  //
  //     category: {
  //       id: 0,
  //       title: '',
  //     },
  //     mexanism: '',
  //     user: '',
  //   };
  //   this.journalRestApiService.create(reglamWork).subscribe(() => {
  //     this.form.reset();
  //   });
  // }

  //     title: this.form.value.title,
  //     hour: this.form.value.hour,
  //     date: new Date(),
  //
  //     category: {
  //       id: this.form.value.caid,
  //       title: this.form.value.catitle,
  //     },
  //     mexanism: this.form.value.mexanism,
  //     user: this.form.value.user,
  //   };
  //   this.journalRestApiService.create(reglamWork).subscribe(() => {
  //     this.form.reset();
  //   });
  // }

