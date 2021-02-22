import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/components/services/restApi.service';

@Component({
  selector: 'app-admin-manager-page',
  templateUrl: './admin-manager-page.component.html',
  styleUrls: ['./admin-manager-page.component.scss']
})
export class AdminManagerPageComponent implements OnInit {

  constructor(
    public restApiService: RestApiService
  ) { }

  ngOnInit(): void {
    this.restApiService.getUsers();
  }

}
