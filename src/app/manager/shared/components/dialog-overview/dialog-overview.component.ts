import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {UserSt} from '../../../../shared/object/user-st';
import {RestApiService} from '../services/restApi.service';
import {AdminManagerPageComponent, userConfirmRemove} from '../../../admin-manager-page/admin-manager-page.component';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})



export class DialogOverviewComponent implements OnInit {




  constructor(
    private restApiService: RestApiService,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserSt ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }


  onYesClick(id: string): void {
     console.log( ' yes on click id = ', this.data.id);

  }
 ngOnInit(): void {
 }

}
