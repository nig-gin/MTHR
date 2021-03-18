import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {cont, jourInterface, reglamW} from '../../shared/object/interfeces';
import {AdminRestApiService} from '../shared/components/services/adminRestApi.service';
import {Subscription, throwError} from 'rxjs';
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
export class JournalPageComponent implements   OnInit {
  displayedColumns: string[] = ['mex-cat', 'mex-hour',  'hour', 'title', 'profile', 'edit'];
  dataSource!: MatTableDataSource<cont>;
  content: cont[] = [];
  journal: any;

  postReq = {
  pageSize: 5,
  pageNumber: 0,
  sortColumn: 'title',
  sortDirection: 'asc',
};

  done!: boolean;

  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort)  sort!: MatSort;

  constructor(  public restApiService: JournalRestApiService,
  ) {}

 ngOnInit() {
   // this.restApiService.getAll().subscribe(journals => {
   //   this.dataSource = new MatTableDataSource<jourInterface>(journals);
   //   console.log('journal get:', this.dataSource);
   //   this.dataSource.paginator = this.paginator;
   //   this.dataSource.sort = this.sort;
   // });
   // this.restApiService.postReglam(this.postReq).subscribe(() => {
   //   console.log('post', this.postReq);
   // });

   this.restApiService.postData(this.postReq)
     .subscribe(
       (data: any) => {this.journal = data; this.done = true,
         console.log('post', data);
                       this.validData();
       },
       error => console.log(error)
     );
 }

 validData(){
      console.log('valid data:', this.journal.content);

      this.dataSource = new MatTableDataSource<cont>(this.journal.content);
      console.log('journal get:', this.dataSource);
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



}

