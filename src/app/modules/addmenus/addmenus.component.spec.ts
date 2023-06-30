import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmenusComponent } from './addmenus.component';

describe('AddmenusComponent', () => {
  let component: AddmenusComponent;
  let fixture: ComponentFixture<AddmenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmenusComponent]
    });
    fixture = TestBed.createComponent(AddmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
