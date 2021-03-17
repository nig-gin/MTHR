import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JournalRestApiService} from '../../shared/components/services/journalRestApi.service';
import {UserSt} from '../../../shared/object/user-st';
import {createJournal, jourInterface} from '../../../shared/object/interfeces';
import {Data} from '@angular/router';
import {Category} from '../../../shared/object/category';
import {Subscription} from 'rxjs';
import {Mexanisms} from '../../../shared/object/mechanisms';
import {formatNumber} from '@angular/common';


export interface test {
  mexanism: {
    id: number;
    hour: number;
    title: string;
    category: {
      id: number;
      title: string;
    }
  };

  title: string;
  hour: number;
  date: Data;

  category: {
    id: number;
    title: string;
      };
  profile: {
    id?: number;
    // fullname: string;
    // password: string;
    // phone: string;
    // position: string;
    // username: string;
  };
}
@Component({
  selector: 'app-create-reglam-works-page',
  templateUrl: './create-reglam-works-page.component.html',
  styleUrls: ['./create-reglam-works-page.component.scss']
})
export class CreateReglamWorksPageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  pSub!: Subscription;
  dSub!: Subscription;
  category: Category[] = [];
  mexanism: Mexanisms[] = [];
  userSts!: UserSt[] ;
  selectedValueCat!: number;
  selectedValueMex!: number;
  selectedValueUser!: number;
  constructor(
    private journalRestApiService: JournalRestApiService,
  ) {
  }

  ngOnInit(): void {


    this.journalRestApiService.getCategory().subscribe(categories => {
      this.category = categories;
      console.log('category get:', this.category);
      });
    this.journalRestApiService.getMexanism().subscribe(mexanisms => {
      this.mexanism = mexanisms;
      console.log('mexanism get:', this.mexanism);
    });
    this.journalRestApiService.getUser().subscribe(users => {
      this.userSts = users;

      // this.TeacherTable = new MatTableDataSource<Teacher>(alldata.Data.teachers);

      console.log('user get:', this.userSts);
    });
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      hour: new FormControl(null, Validators.required),
     caid: new FormControl(null, Validators.required),
      catitle: new FormControl(null, Validators.required),
  //    mexanism: new FormControl(null),
      mexId:  new FormControl(null),
      mexTitle:  new FormControl(null),
      mexHour:    new FormControl(null),
      mexCat: new FormControl(null),
      userId: new FormControl(null)
    });
  }

  submit() {
    // if (this.form.invalid) {
    //   return;
    // }

    console.log('Ca ID : ', this.form.value.caid);

    const reglamWork: createJournal = {
      title: this.form.value.title,
      hour: this.form.value.hour,
      date: new Date(),
      category: {
        id: 1,
        title: '',
      },
      mexanism: {
        id: 1,
        title: '',
         hour: 100,
        category: {
         // id: ,
          title: '',
        }
      },
      profile: {
        id: this.selectedValueUser ,
        fullName  : '',
        password: '',
        phone: '',
        position: '',
        username: '',
      }
  };
    console.log('post req:', reglamWork);
    this.journalRestApiService.create(reglamWork).subscribe(() => {
        this.form.reset();
      }
      );
    // (err: HttpErrorResponse) => {
    //   this.isLoginError = true;
    //   console.log(err);
    //   this.restart = false;   /*VITALIY*/
    //   setTimeout(() => {
    //     this.restart = true;
    //   }, 4000);


  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }
}
//



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
//
// title: this.form.value.title,
//   hour: this.form.value.hour,
//   date: new Date(),
//   category: {
//   id: this.form.value.caid,
//     title: '',
// },
// mexanism: {
//   id: this.form.value.mexId ,
//     title: '',
//     // hour: 0,
//     category: {
//     // id: ,
//     title: '',
//   }
// },
// profile: {
//   id: this.form.value.userId,
//     fullName  : '',
//     password: '',
//     phone: '',
//     position: '',
//     username: '',
// }
// };
