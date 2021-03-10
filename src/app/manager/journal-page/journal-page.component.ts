import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jourInterface} from '../../shared/object/interfeces';
import {AdminRestApiService} from '../shared/components/services/adminRestApi.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {JournalRestApiService} from '../shared/components/services/journalRestApi.service';



export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.scss']
})
export class JournalPageComponent implements OnInit{
  displayedColumns: string[] = ['mexanism', 'hour', 'title', 'user'];
  dataSource!: MatTableDataSource<jourInterface>;
  journals: jourInterface[] = [];
  //
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  //
  // constructor(  public restApiService: JournalRestApiService,
  // ) {  }
  //
  //
  // ngOnInit(): void {
  //   this.restApiService.getAll().subscribe(journals => {
  //     this.journals = journals;
  //     console.log('journal get:', this.journals);
  //     this.dataSource = new MatTableDataSource(this.journals);
  //   });
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  //
  // ngAfterViewInit() {
  //
  // }
  //
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.restApiService.getAll().subscribe(journals => {
      this.journals = journals;
      console.log('journal get:', this.journals);
      this.dataSource = new MatTableDataSource(this.journals);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

