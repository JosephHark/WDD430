import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonEditComponent } from './dungeon-edit.component';

describe('DungeonEditComponent', () => {
  let component: DungeonEditComponent;
  let fixture: ComponentFixture<DungeonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
