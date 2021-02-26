import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {UserSt} from '../../../../shared/object/user-st';
import {RestApiService} from '../services/restApi.service';



@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})

export class DialogOverviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserSt) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void{
    console.log( 'id = ', this.data.username);
    // this.remove(this.remove(data.name))
  }
 ngOnInit(): void {
 }

}
