import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagerPageComponent } from './admin-manager-page.component';

describe('AdminManagerPageComponent', () => {
  let component: AdminManagerPageComponent;
  let fixture: ComponentFixture<AdminManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManagerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
