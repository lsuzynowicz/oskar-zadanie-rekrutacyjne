import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingRecordComponent } from './adding-record.component';

describe('AddingRecordComponent', () => {
  let component: AddingRecordComponent;
  let fixture: ComponentFixture<AddingRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
