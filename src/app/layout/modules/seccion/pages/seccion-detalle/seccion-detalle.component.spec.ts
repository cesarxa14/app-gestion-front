import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionDetalleComponent } from './seccion-detalle.component';

describe('SeccionDetalleComponent', () => {
  let component: SeccionDetalleComponent;
  let fixture: ComponentFixture<SeccionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
