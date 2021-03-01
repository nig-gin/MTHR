import {Component, Inject, Injectable, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {UserSt} from '../../../../shared/object/user-st';
import {AdminRestApiService} from '../services/adminRestApi.service';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})



export class DialogOverviewComponent implements OnInit, OnDestroy{


  users: UserSt[] = [];
  dSub!: Subscription;

  constructor(
    private restApiService: AdminRestApiService,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserSt ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }



 ngOnInit(): void {
 }

// remove(id: string) {
//   this.dSub = this.restApiService.remove(id).subscribe(() => {
//     this.users = this.users.filter(user => user.id !== id);
//   });
//   console.log(id + 'remove bottom');
//   this.dialogRef.close();
//
//   }
  ngOnDestroy() {
    this.dialogRef.close();
    if (this.dSub) {

      this.dSub.unsubscribe();
      console.log('End delete');
      location.reload();
    }
  }
  onYesClick(id: string): void {
    console.log( ' yes on click id = ', this.data.id);
    this.dSub = this.restApiService.remove(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
    console.log(id + 'remove bottom');
    this.dialogRef.close();
  }
}
