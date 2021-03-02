import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AuthService} from './manager/shared/components/services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ManagerModule} from './manager/manager.module';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent
    ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    ManagerModule,

      ],
  providers: [],
  bootstrap: [AppComponent]



})
export class AppModule { }
