import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSeccionModalComponent } from './agregar-seccion-modal.component';

describe('AgregarSeccionModalComponent', () => {
  let component: AgregarSeccionModalComponent;
  let fixture: ComponentFixture<AgregarSeccionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSeccionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSeccionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
