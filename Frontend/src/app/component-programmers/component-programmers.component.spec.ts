import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProgrammersComponent } from './component-programmers.component';

describe('ComponentProgrammersComponent', () => {
  let component: ComponentProgrammersComponent;
  let fixture: ComponentFixture<ComponentProgrammersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentProgrammersComponent]
    });
    fixture = TestBed.createComponent(ComponentProgrammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
