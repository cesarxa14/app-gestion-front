import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { angularEditorConfig } from 'src/app/shared/constants/editorConfig';
import { BloqueService } from '../../../services/bloque.service';
import { ICreateBlockDto } from '../../../interfaces/ICreateBlockDto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-bloque-modal',
  templateUrl: './agregar-bloque-modal.component.html',
  styleUrls: ['./agregar-bloque-modal.component.css']
})
export class AgregarBloqueModalComponent implements OnInit {

  addBlockForm: FormGroup;
  editorConfig: AngularEditorConfig = angularEditorConfig;
  @Output() block_emit:any = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<AgregarBloqueModalComponent>,
    private _formBuilder: FormBuilder,
    private bloqueService: BloqueService,
    @Inject(MAT_DIALOG_DATA) public idContenido: any,
  ) { }

  ngOnInit(): void {
    this.addBlockForm = this._builderForm();
  }

  _builderForm() {
    // const pattern = '[a-zA-Z ]{2,254}';
    
    const form = this._formBuilder.group({
   
      content: ['', [Validators.required]],
     
    });

    return form;
  }

  get content() {return this.addBlockForm.controls["content"]}

  createBlock(){
    console.log('content', this.content.value)

    const payloadCreate: ICreateBlockDto = {
      content: this.content.value,
      contenido_id: this.idContenido // FALTA;
    }

    this.bloqueService.createContent(payloadCreate).subscribe((res: any) => {
      console.log('res created: ', res);

      Swal.fire({
        title: 'Se creó el contenido!',
        // text: 'Se inició sesión',
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      }).then((result) => {
        console.log('result: ', result)
        if(result.isConfirmed){
          this.block_emit.emit(res)
          this.dialogRef.close()
          
        }
      })
    })
  }
}
