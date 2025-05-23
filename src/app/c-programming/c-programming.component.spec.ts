import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProgrammingComponent } from './c-programming.component';

describe('CProgrammingComponent', () => {
  let component: CProgrammingComponent;
  let fixture: ComponentFixture<CProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CProgrammingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
