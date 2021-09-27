import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Document.Model.TsComponent } from './document.model.ts.component';

describe('Document.Model.TsComponent', () => {
  let component: Document.Model.TsComponent;
  let fixture: ComponentFixture<Document.Model.TsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Document.Model.TsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Document.Model.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
