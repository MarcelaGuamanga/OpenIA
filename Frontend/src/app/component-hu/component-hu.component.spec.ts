import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHUComponent } from './component-hu.component';

describe('ComponentHUComponent', () => {
  let component: ComponentHUComponent;
  let fixture: ComponentFixture<ComponentHUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentHUComponent]
    });
    fixture = TestBed.createComponent(ComponentHUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
