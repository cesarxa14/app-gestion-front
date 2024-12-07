import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBloqueModalComponent } from './agregar-bloque-modal.component';

describe('AgregarBloqueModalComponent', () => {
  let component: AgregarBloqueModalComponent;
  let fixture: ComponentFixture<AgregarBloqueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarBloqueModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarBloqueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
