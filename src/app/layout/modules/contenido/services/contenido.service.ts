import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICreateContentDto } from '../interfaces/ICreateContentDto';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private API_BASE_URI: string = environment.API_URI + 'contents'
  constructor(
    private http: HttpClient,
  ) { }

  getContents(){
    try{
      return this.http.get(`${this.API_BASE_URI}`)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }

  createSubSection(payload: ICreateContentDto){
    try{
      return this.http.post(`${this.API_BASE_URI}`, payload)
    }catch(err) {
      console.log('error: ', err)
      throw err
    }
  }


}
