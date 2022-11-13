import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationBetw2CompComponent } from './communication-betw2-comp.component';

describe('CommunicationBetw2CompComponent', () => {
  let component: CommunicationBetw2CompComponent;
  let fixture: ComponentFixture<CommunicationBetw2CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationBetw2CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationBetw2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
