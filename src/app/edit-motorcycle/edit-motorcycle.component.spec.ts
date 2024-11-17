import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMotorcycleComponent } from './edit-motorcycle.component';

describe('EditMotorcycleComponent', () => {
  let component: EditMotorcycleComponent;
  let fixture: ComponentFixture<EditMotorcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMotorcycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
