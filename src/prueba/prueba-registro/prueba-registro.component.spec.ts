import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaRegistroComponent } from './prueba-registro.component';

describe('PruebaRegistroComponent', () => {
  let component: PruebaRegistroComponent;
  let fixture: ComponentFixture<PruebaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
