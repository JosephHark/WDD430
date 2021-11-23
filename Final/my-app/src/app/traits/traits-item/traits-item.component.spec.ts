import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsItemComponent } from './traits-item.component';

describe('TraitsItemComponent', () => {
  let component: TraitsItemComponent;
  let fixture: ComponentFixture<TraitsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
