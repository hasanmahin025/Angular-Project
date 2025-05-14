import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakContinueComponent } from './break-continue.component';

describe('BreakContinueComponent', () => {
  let component: BreakContinueComponent;
  let fixture: ComponentFixture<BreakContinueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakContinueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
