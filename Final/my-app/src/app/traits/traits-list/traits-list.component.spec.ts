import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsListComponent } from './traits-list.component';

describe('TraitsListComponent', () => {
  let component: TraitsListComponent;
  let fixture: ComponentFixture<TraitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
