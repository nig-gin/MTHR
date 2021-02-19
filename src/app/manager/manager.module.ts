import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ManagerLayoutComponent} from './shared/components/manager-layout/manager-layout.component';
import {JournalPageComponent} from './journal-page/journal-page.component';
import {AuthService} from './shared/components/services/auth.service';



@NgModule({
  declarations: [
    ManagerLayoutComponent,
    JournalPageComponent,
      ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: ManagerLayoutComponent, children: [
          {path: '', redirectTo: '/manager/journal', pathMatch: 'full'},
          {path: 'journal', component: JournalPageComponent}
        ]
      }
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthService]
})
export class ManagerModule {

}
