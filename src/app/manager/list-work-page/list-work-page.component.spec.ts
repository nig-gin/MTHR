import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkPageComponent } from './list-work-page.component';

describe('ListWorkPageComponent', () => {
  let component: ListWorkPageComponent;
  let fixture: ComponentFixture<ListWorkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWorkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
