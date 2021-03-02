import { Component, OnInit, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jourInterface} from '../../shared/object/interfeces';
import {AdminRestApiService} from '../shared/components/services/adminRestApi.service';
import {Subscription} from 'rxjs';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.scss']
})
export class JournalPageComponent implements OnInit {

  displayedColumns: string[] = ['no', 'motohour_set', 'reglament_work',
    'data', 'performer'];

  selectedValue!: string;
  selectedCar!: string;

  constructor() {}
  foods: Food[] = [
    {value: '1', viewValue: 'Вентиляторы'},
    {value: '2', viewValue: 'Конвееры'},
    {value: '3', viewValue: 'Нории'},
    {value: '4', viewValue: 'Сушки'}
  ];


  ngOnInit(): void {

  }
}

