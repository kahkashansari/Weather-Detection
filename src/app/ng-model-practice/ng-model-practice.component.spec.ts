import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelPracticeComponent } from './ng-model-practice.component';

describe('NgModelPracticeComponent', () => {
  let component: NgModelPracticeComponent;
  let fixture: ComponentFixture<NgModelPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
