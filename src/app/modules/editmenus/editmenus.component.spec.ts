import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmenusComponent } from './editmenus.component';

describe('EditmenusComponent', () => {
  let component: EditmenusComponent;
  let fixture: ComponentFixture<EditmenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditmenusComponent]
    });
    fixture = TestBed.createComponent(EditmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
