import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContenidoModalComponent } from './agregar-contenido-modal.component';

describe('AgregarContenidoModalComponent', () => {
  let component: AgregarContenidoModalComponent;
  let fixture: ComponentFixture<AgregarContenidoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarContenidoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarContenidoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
