import { Component, OnInit, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jourInterface} from '../../shared/object/interfeces';
import {AdminRestApiService} from '../shared/components/services/adminRestApi.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {Category} from '../../shared/object/category';




@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

  //
  // displayedColumns: string[] = ['foviv', 'name_work', 'date',
  //   'user_id', 'category_id', 'mex_id'];
  //
  // selectedValue!: string;
  // searchStr = '';
  // constructor() {}
  // categories: Category[] = [
  //   {category_id: 1, title: 'Вентиляторы'},
  //   {category_id: 2, title: 'Конвееры'},
  //   {category_id: 'Admin3', title: 'Нории'},
  //   {category_id: '4', title: 'Сушки'}
  // ];
  //
  // reglamentsWork: jourInterface[] = [
  //   {foviv: 100, name_work: 'Вентиляторы что то поменять',
  //     date: new Date(), user_id: 'Admin1', category_id: 1, mex_id: 22},
  //   {foviv: 100, name_work: 'Вентиляторы что то поменять',
  //     date: new Date(), user_id: 'Admin1', category_id: 1, mex_id: 23},
  //   {foviv: 100, name_work: 'Вентиляторы что то поменять',
  //     date: new Date(), user_id: 'Admin2', category_id: 2, mex_id: 12},
  //   {foviv: 100, name_work: 'Вентиляторы что то поменять',
  //     date: new Date(), user_id: 'Admin2', category_id: 2, mex_id: 21},
  //   {foviv: 100, name_work: 'Вентиляторы что то поменять',
  //     date: new Date(), user_id: 'Admin3', category_id: 3, mex_id: 32},
  //   {foviv: 100, name_work: 'Вентиляторы что то поменять',
  //     date: new Date(), user_id: 'Admin3', category_id: 3, mex_id: 33},
  // ];
  // dataSource = new MatTableDataSource<jourInterface>();
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  ngOnInit(): void {
  }
}
