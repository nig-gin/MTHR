import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {JournalRestApiService} from '../shared/components/services/journalRestApi.service';
import ListDB from "../journal-page/list.json"
import {MatTableDataSource} from "@angular/material/table";
import ListCategory from "../journal-page/category.json"

export interface list {
  id:number,
  product_name:string,
  category: number,
  username: string,
  price: string,
  colvo: string,
  confirm: boolean
}
export interface categoty {
  id:number,
  category: string
}


@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.scss']
})
export class JournalPageComponent implements  OnInit {

list: {
    id: number,
    product_name: string,
    category: number,
    username: string,
    price: string,
    colvo: string,
    confirm: boolean
}[] =  ListDB;
  categoty: {
    id: number,
    category: number,
  }[] =  ListCategory;
  //   id: number,
  //   product_name: string,
  //   category: number,
  //   username: string,
  //   price: string,
  //   colvo: string,
  //   confirm: boolean
  // }[] = ListDB;

  displayedColumns: string[] = ['id', 'product_name', 'category', 'username',
    'price', 'colvo', 'confirm' ];


  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort)  sort!: MatSort;

  constructor(  public restApiService: JournalRestApiService,

  ) {}


  ngOnInit() {
    console.log(this.list)
    console.log(this.categoty)

 }

 category_name (){
  this.categoty
      .map(response => response.id)
    console.log(this.categoty)
    // if (this.list_[].category == this.categoty_[].id){
    //   console.log('category name = ', this.categoty_[].id))
    // }

 }

  dataSource = new MatTableDataSource(this.list);
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
}

