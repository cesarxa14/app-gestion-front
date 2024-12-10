import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeccionModalComponent } from './edit-seccion-modal.component';

describe('EditSeccionModalComponent', () => {
  let component: EditSeccionModalComponent;
  let fixture: ComponentFixture<EditSeccionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSeccionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSeccionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
