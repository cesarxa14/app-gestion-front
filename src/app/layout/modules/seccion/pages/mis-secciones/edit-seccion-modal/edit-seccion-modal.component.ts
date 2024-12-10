import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ISectionEntity } from '../../../interfaces/ISectionEntity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEditSectionDto } from '../../../interfaces/IEditSectionDto';
import { SeccionService } from '../../../services/seccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-seccion-modal',
  templateUrl: './edit-seccion-modal.component.html',
  styleUrls: ['./edit-seccion-modal.component.css']
})
export class EditSeccionModalComponent implements OnInit {

  editSectionForm: FormGroup;
  @Output() edit_emit:any = new EventEmitter();
  constructor(
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public seccion: ISectionEntity,
    private seccionService: SeccionService,
    public dialogRef: MatDialogRef<EditSeccionModalComponent>,

  ) { }

  ngOnInit(): void {
    this.editSectionForm = this._builderForm();
  }

  _builderForm() {
    // const pattern = '[a-zA-Z ]{2,254}';
    
    const form = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    return form;
  }
  get name() {return this.editSectionForm.controls["name"]}
  get description() {return this.editSectionForm.controls["description"]}

  editSection(){

    Swal.showLoading();
    const payloadEdit: IEditSectionDto = {
      name: this.name.value,
      description: this.description.value,
      id_section: this.seccion.id
    }

    this.seccionService.updateSection(payloadEdit).subscribe((res: any)=> {
      Swal.close();
      Swal.fire({
        title: 'Se editó la seccion!',
        // text: 'Se inició sesión',
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      }).then((result) => {
        console.log('result: ', result)
        if(result.isConfirmed){
          this.edit_emit.emit(res)
          this.dialogRef.close()
          
        }
      })
    })
  }

}
