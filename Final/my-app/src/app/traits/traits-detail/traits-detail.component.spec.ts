import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsDetailComponent } from './traits-detail.component';

describe('TraitsDetailComponent', () => {
  let component: TraitsDetailComponent;
  let fixture: ComponentFixture<TraitsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
