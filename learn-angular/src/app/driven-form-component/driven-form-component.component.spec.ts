import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenFormComponentComponent } from './driven-form-component.component';

describe('DrivenFormComponentComponent', () => {
  let component: DrivenFormComponentComponent;
  let fixture: ComponentFixture<DrivenFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivenFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivenFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
