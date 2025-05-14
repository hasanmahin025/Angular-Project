import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppProgrammingComponent } from './cpp-programming.component';

describe('CppProgrammingComponent', () => {
  let component: CppProgrammingComponent;
  let fixture: ComponentFixture<CppProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CppProgrammingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CppProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
