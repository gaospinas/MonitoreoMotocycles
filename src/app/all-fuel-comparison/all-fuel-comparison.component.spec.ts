import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFuelComparisonComponent } from './all-fuel-comparison.component';

describe('AllFuelComparisonComponent', () => {
  let component: AllFuelComparisonComponent;
  let fixture: ComponentFixture<AllFuelComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFuelComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFuelComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
