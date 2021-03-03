import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import {ManagerLayoutComponent} from './shared/components/manager-layout/manager-layout.component';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { ListWorkPageComponent } from './list-work-page/list-work-page.component';
import { AdminManagerPageComponent } from './admin-manager-page/admin-manager-page.component';
import {RouterModule} from '@angular/router';
import {AdminRestApiService} from './shared/components/services/adminRestApi.service';
import {HttpClientModule} from '@angular/common/http';
import {JournalPageComponent} from './journal-page/journal-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewComponent } from './shared/components/dialog-overview/dialog-overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserPageComponent } from './edit-user-page/edit-user-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';




@NgModule({
  declarations: [
    ManagerLayoutComponent,
    CalendarPageComponent,
    ListWorkPageComponent,
    AdminManagerPageComponent,
    JournalPageComponent,
    DialogOverviewComponent,
    CreateUserComponent,
    EditUserPageComponent],

  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [RouterModule],
  providers: [AdminRestApiService],
})
export class ManagerModule { }
