import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubseccionService } from '../../../services/subseccion.service';
import { ICreateSubSectionDto } from '../../../interfaces/ICreateSubsectionDto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-agregar-subseccion-modal',
  templateUrl: './agregar-subseccion-modal.component.html',
  styleUrls: ['./agregar-subseccion-modal.component.css']
})
export class AgregarSubseccionModalComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Ingresa la descripcion.',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      // Ocultar botones específicos (por ejemplo, enlaces y videos)
      ['insertVideo'], 
      ['strikeThrough', 'subscript', 'superscript']
    ]
   
};
  addSubSectionForm: FormGroup;
  @Output() subseccion_emit:any = new EventEmitter();
  constructor(
    private _formBuilder: FormBuilder,
    private subSeccionService: SubseccionService,
    @Inject(MAT_DIALOG_DATA) public idSeccion: any,
    public dialogRef: MatDialogRef<AgregarSubseccionModalComponent>,
  ) { }

  ngOnInit(): void {
    console.log('idseccion: ', this.idSeccion)
    this.addSubSectionForm = this._builderForm();
  }

  _builderForm() {
    // const pattern = '[a-zA-Z ]{2,254}';
    
    const form = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image_header: ['', [Validators.required]],
    });

    return form;
  }
  get name() {return this.addSubSectionForm.controls["name"]}
  get description() {return this.addSubSectionForm.controls["description"]}
  get image_header() {return this.addSubSectionForm.controls["image_header"]}

  onFileSelected(event: Event){
    let file
    let base64File
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        base64File = reader.result as string;
        this.image_header.setValue(base64File)
        console.log('Archivo en Base64:', base64File);
      };
      reader.readAsDataURL(file);
    }
  }

  createSubSection(){
    const payloadCreateSubseccion: ICreateSubSectionDto = {
      description: this.description.value,
      name: this.name.value,
      image_header: this.image_header.value,
      seccion_id: Number(this.idSeccion)
    }

    console.log(payloadCreateSubseccion)
    
    this.subSeccionService.createSubSection(payloadCreateSubseccion).subscribe((res: any) => {
      console.log('res created: ', res);
      Swal.fire({
        title: 'Se creó la subseccion!',
        // text: 'Se inició sesión',
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      }).then((result) => {
        console.log('result: ', result)
        if(result.isConfirmed){
          this.subseccion_emit.emit(res)
          this.dialogRef.close()
          
        }
      })
    })
  }

}
