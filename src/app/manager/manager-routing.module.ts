import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerLayoutComponent} from './shared/components/manager-layout/manager-layout.component';
import {JournalPageComponent} from './journal-page/journal-page.component';
import {CalendarPageComponent} from './calendar-page/calendar-page.component';
import {AdminManagerPageComponent} from './admin-manager-page/admin-manager-page.component';
import {ListWorkPageComponent} from './list-work-page/list-work-page.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {EditUserPageComponent} from './edit-user-page/edit-user-page.component';

const routes: Routes = [{ path: '', component: ManagerLayoutComponent, children: [
    {path: '', redirectTo: '/manager/journal', pathMatch: 'full'},
    { path: 'journal', component: JournalPageComponent},
    { path: 'calendar', component: CalendarPageComponent},
    { path: 'list-work', component: ListWorkPageComponent},
    { path: 'admin-manager', component: AdminManagerPageComponent},
    {path: 'create-user', component: CreateUserComponent},
    {path: 'user/:id/edit', component: EditUserPageComponent}
  ]}
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
