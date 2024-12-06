import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICreateSubSectionDto } from '../interfaces/ICreateSubsectionDto';

@Injectable({
  providedIn: 'root'
})
export class SubseccionService {

  private API_BASE_URI: string = environment.API_URI + 'subsecciones'
  constructor(
    private http: HttpClient,
  ) { }

  getSubseccionesByIdSeccion(idSeccion: string){
    try{
      return this.http.get(`${this.API_BASE_URI}/seccion/${idSeccion}`)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }

  createSubSection(payload: ICreateSubSectionDto){
    try{
      return this.http.post(`${this.API_BASE_URI}`, payload)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }
}
