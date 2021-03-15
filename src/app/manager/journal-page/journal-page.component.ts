import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jourInterface} from '../../shared/object/interfeces';
import {AdminRestApiService} from '../shared/components/services/adminRestApi.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {JournalRestApiService} from '../shared/components/services/journalRestApi.service';



// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }


@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.scss']
})
export class JournalPageComponent implements  AfterViewInit, OnInit {
  displayedColumns: string[] = ['mex-hour', 'mex-title', 'hour', 'title', 'user'];
  dataSource!: MatTableDataSource<jourInterface>;
  journal: jourInterface[] = [];


  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort)  sort!: MatSort;
  constructor(  public restApiService: JournalRestApiService,
  ) {}
 ngOnInit(): void {
   this.restApiService.getAll().subscribe(journals => {
     this.journal = journals;
     console.log('journal get:', this.journal);
   });
 }
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.journal);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
  }

  // ngOnInit(): void {
  //
  // }



}

