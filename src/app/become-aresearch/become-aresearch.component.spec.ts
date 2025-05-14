import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAResearchComponent } from './become-aresearch.component';

describe('BecomeAResearchComponent', () => {
  let component: BecomeAResearchComponent;
  let fixture: ComponentFixture<BecomeAResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeAResearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeAResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
