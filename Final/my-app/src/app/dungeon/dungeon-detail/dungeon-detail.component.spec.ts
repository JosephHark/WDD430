import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonDetailComponent } from './dungeon-detail.component';

describe('DungeonDetailComponent', () => {
  let component: DungeonDetailComponent;
  let fixture: ComponentFixture<DungeonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
