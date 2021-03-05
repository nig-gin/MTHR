import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JournalRestApiService} from '../../shared/components/services/journalRestApi.service';

@Component({
  selector: 'app-create-reglam-works-page',
  templateUrl: './create-reglam-works-page.component.html',
  styleUrls: ['./create-reglam-works-page.component.scss']
})
export class CreateReglamWorksPageComponent implements OnInit {
  form!: FormGroup;
  constructor(journalRestApiService: JournalRestApiService) {  }

  ngOnInit(): void {

    this.form = new FormGroup({
      mexanism: new FormControl(null, Validators.required),
      hour: new FormControl(null, Validators.required),
      fullName: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),
      category: new FormGroup({
          id: new FormControl(null, Validators.required),
         title: new FormControl(null, Validators.required),
      }),


    })
  }

  submit() {

  }
}
