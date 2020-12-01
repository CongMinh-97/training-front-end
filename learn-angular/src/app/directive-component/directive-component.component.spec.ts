import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveComponentComponent } from './directive-component.component';

describe('DirectiveComponentComponent', () => {
  let component: DirectiveComponentComponent;
  let fixture: ComponentFixture<DirectiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
