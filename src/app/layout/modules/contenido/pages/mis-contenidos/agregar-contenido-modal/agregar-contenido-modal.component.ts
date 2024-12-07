import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContenidoService } from '../../../services/contenido.service';
import { ICreateContentDto } from '../../../interfaces/ICreateContentDto';
import { SeccionService } from 'src/app/layout/modules/seccion/services/seccion.service';
import { ISectionEntity } from 'src/app/layout/modules/seccion/interfaces/ISectionEntity';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { angularEditorConfig } from 'src/app/shared/constants/editorConfig';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-contenido-modal',
  templateUrl: './agregar-contenido-modal.component.html',
  styleUrls: ['./agregar-contenido-modal.component.css']
})
export class AgregarContenidoModalComponent implements OnInit {

  editorConfig: AngularEditorConfig = angularEditorConfig;
  addContentForm: FormGroup;
  sectionsList: ISectionEntity[] = [];

  @Output() content_emit:any = new EventEmitter();

 
  constructor(
    private _formBuilder: FormBuilder,
    private contenidoService: ContenidoService,
    private seccionService: SeccionService,
    public dialogRef: MatDialogRef<AgregarContenidoModalComponent>,
  ) { }

  ngOnInit(): void {
      
    this.getSecciones();
    this.onTypeItemChange();
  }


  public onTextChange(text:any) {
    console.log('text changed: value is ' + text);
    console.log(this.keywords.value)
}

  _builderForm() {
    // const pattern = '[a-zA-Z ]{2,254}';
    
    const form = this._formBuilder.group({
      link: [''],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      document: [''],
      image: ['', [Validators.required]],
      introduction: ['', [Validators.required]],
      keywords: ['', [Validators.required]],
      title: ['', [Validators.required]],
      section: ['', [Validators.required]],
    });

    return form;
  }

  get article() {return this.addContentForm.controls["article"]}
  get description() {return this.addContentForm.controls["description"]}
  get document() {return this.addContentForm.controls["document"]}
  get introduction() {return this.addContentForm.controls["introduction"]}
  get image() {return this.addContentForm.controls["image"]}
  get keywords() {return this.addContentForm.controls["keywords"]}
  get link() {return this.addContentForm.controls["link"]}
  get title() {return this.addContentForm.controls["title"]}
  get section() {return this.addContentForm.controls["section"]}
  get type() {return this.addContentForm.controls["type"]}

  getSecciones(){
    this.seccionService.getSecciones().subscribe((res: any) => {
      console.log('res get secciones: ', res);
      this.sectionsList = res;
    })
  }

  onFileSelected(event: Event){
    let file
    let base64File
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        base64File = reader.result as string;
        this.image.setValue(base64File)
        console.log('Archivo en Base64:', base64File);
      };
      reader.readAsDataURL(file);
    }
  }

  onTypeItemChange(){
    
    this.type?.valueChanges.subscribe(value => {
      console.log('value saleItem: ', value)
      if(value == "Enlace"){
        this.link.setValidators([Validators.required])
        this.document.setValidators([])
        this.document.reset();
      } else if(value == 'Documento'){
        this.document.setValidators([Validators.required])
        this.link.setValidators([])
        this.link.reset();
      }
    })
  }

  onDocumentSelected(event: Event){
    let file
    let base64File
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        base64File = reader.result as string;
        this.document.setValue(base64File)
        console.log('Archivo en Base64:', base64File);
      };
      reader.readAsDataURL(file);
    }
  }

  createContent(){
    const payloadCreate: ICreateContentDto = {
      // article: this.article.value,
      description: this.description.value,
      document: this.document.value,
      image: this.image.value,
      introduction: this.introduction.value,
      keywords: JSON.stringify(this.keywords.value),
      link: this.link.value,
      title: this.title.value,
      seccion_id: this.section.value,
      type: this.type.value
    }

    console.log(payloadCreate)
    // return;
    this.contenidoService.createContent(payloadCreate).subscribe((res:any)=> {
      console.log('res contenidos: ', res)
      Swal.fire({
        title: 'Se creó el contenido!',
        // text: 'Se inició sesión',
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      }).then((result) => {
        console.log('result: ', result)
        if(result.isConfirmed){
          this.content_emit.emit(res)
          this.dialogRef.close()
          
        }
      })
    })
  }

}
