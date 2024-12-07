import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDetalleComponent } from './contenido-detalle.component';

describe('ContenidoDetalleComponent', () => {
  let component: ContenidoDetalleComponent;
  let fixture: ComponentFixture<ContenidoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
