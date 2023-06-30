import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMenusComponent } from './mostrar-menus.component';

describe('MostrarMenusComponent', () => {
  let component: MostrarMenusComponent;
  let fixture: ComponentFixture<MostrarMenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarMenusComponent]
    });
    fixture = TestBed.createComponent(MostrarMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
