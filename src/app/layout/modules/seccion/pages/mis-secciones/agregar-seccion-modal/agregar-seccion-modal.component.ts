import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateSectionDto } from '../../../interfaces/ICreateSectionDto';
import { SeccionService } from '../../../services/seccion.service';

@Component({
  selector: 'app-agregar-seccion-modal',
  templateUrl: './agregar-seccion-modal.component.html',
  styleUrls: ['./agregar-seccion-modal.component.css']
})
export class AgregarSeccionModalComponent implements OnInit {

  addSectionForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private seccionService: SeccionService
  ) { }

  ngOnInit(): void {
    this.addSectionForm = this._builderForm();
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
  get name() {return this.addSectionForm.controls["name"]}
  get description() {return this.addSectionForm.controls["description"]}
  get image_header() {return this.addSectionForm.controls["image_header"]}

  createSection(){
    const newSection: ICreateSectionDto = {
      name: this.name.value,
      description: this.description.value,
      image_header: this.image_header.value
    }

    this.seccionService.createSection(newSection).subscribe((res: any)=> {
      console.log('res create: ', res);
    })
  }

}
