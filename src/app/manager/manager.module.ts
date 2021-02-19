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


@NgModule({
  declarations: [
    ManagerLayoutComponent,
    CalendarPageComponent,
    ListWorkPageComponent,
    AdminManagerPageComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatButtonModule,
  ],
  exports: [RouterModule],
})
export class ManagerModule { }
