import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonItemComponent } from './dungeon-item.component';

describe('DungeonItemComponent', () => {
  let component: DungeonItemComponent;
  let fixture: ComponentFixture<DungeonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
