import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICreateSectionDto } from '../interfaces/ICreateSectionDto';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  private API_BASE_URI: string = environment.API_URI + 'sections'
  constructor(
    private http: HttpClient,
  ) { }


  getSecciones(){
    try{
      return this.http.get(`${this.API_BASE_URI}`)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }

  getSeccionById(id: string){
    try{
      return this.http.get(`${this.API_BASE_URI}/${id}`)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }

  createSection(payload: ICreateSectionDto){
    try{
      return this.http.post(`${this.API_BASE_URI}`, payload)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }

  updateOrderSubsections(id: number, payloadUpdateOrderSucsections: any){
    try{
      return this.http.put(`${this.API_BASE_URI}/${id}`, payloadUpdateOrderSucsections)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }
}
