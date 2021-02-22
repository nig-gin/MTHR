import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import {ManagerLayoutComponent} from './shared/components/manager-layout/manager-layout.component';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { ListWorkPageComponent } from './list-work-page/list-work-page.component';
import { AdminManagerPageComponent } from './admin-manager-page/admin-manager-page.component';
import {RouterModule} from '@angular/router';
import {RestApiService} from './shared/components/services/restApi.service';
import {HttpClientModule} from '@angular/common/http';
import {JournalPageComponent} from './journal-page/journal-page.component';



@NgModule({
  declarations: [
    ManagerLayoutComponent,
    CalendarPageComponent,
    ListWorkPageComponent,
    AdminManagerPageComponent,
    JournalPageComponent,
     ],

  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatButtonModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [RestApiService]
})
export class ManagerModule { }
