import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-manager-layout',
  templateUrl: './manager-layout.component.html',
  styleUrls: ['./manager-layout.component.scss']
})

export class ManagerLayoutComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }


  logout(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }
}
