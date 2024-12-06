import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSubseccionModalComponent } from './agregar-subseccion-modal.component';

describe('AgregarSubseccionModalComponent', () => {
  let component: AgregarSubseccionModalComponent;
  let fixture: ComponentFixture<AgregarSubseccionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSubseccionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSubseccionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
