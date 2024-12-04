import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSeccionesComponent } from './mis-secciones.component';

describe('MisSeccionesComponent', () => {
  let component: MisSeccionesComponent;
  let fixture: ComponentFixture<MisSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisSeccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
