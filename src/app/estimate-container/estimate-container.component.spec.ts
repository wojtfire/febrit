import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateContainerComponent } from './estimate-container.component';

describe('EstimateContainerComponent', () => {
  let component: EstimateContainerComponent;
  let fixture: ComponentFixture<EstimateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
