import { Injectable } from '@angular/core';

import { Registrosalas } from './registrosalas.model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegistrosalasService {
    route: string;
    selected: Registrosalas;
    RegistrosalasLista: Registrosalas[];
    prueba : string;
  
    constructor(private http: Http) {
      this.route = 'https://webapi20181116040509.azurewebsites.net/api/values/5';
    }
  
  /**
   * Obtiene los valores del stored procedure para mapearlos a la pagina web.
   */
    get() {
      this.http.get(this.route).pipe(map((data: Response) => {
        return data.json() as Registrosalas[]
      })).toPromise().then(x => {
        this.RegistrosalasLista =x;
        console.log(this.RegistrosalasLista);
      })
    }
  
  /**Metodo para insertar elementos en las correspondientes tablas de Sala.
   * 
   * @param Registrosalas array que contiene las salas del cine.
   */
    post(Registrosalas: Registrosalas) {
      console.log(JSON.stringify(this.RegistrosalasLista));
      console.log(JSON.stringify(Registrosalas));
      var body = JSON.stringify(Registrosalas);
      var headerOptions = new Headers({ 'Content-type': 'application/json' });
      var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
      return this.http.post(this.route, body, requestOptions).pipe(map(x => x.json()));
  
    }
  /**Metodo para modificar valores de una sala.
   * 
   * @param id Identificador de la sala.
   * @param emp Modelo que contiene los datos de la sala.
   */
    put(id, emp) {
      console.log(JSON.stringify(this.RegistrosalasLista));
      console.log(JSON.stringify(emp));
      var body = JSON.stringify(emp);
      var headerOptions = new Headers({ 'Content-type': 'application/json' });
      var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
      return this.http.put(this.route + '/' + id, body, requestOptions).pipe(map(res => res.json()));
    }
  /**Metodo para eliminiar salas.
   * 
   * @param id Identificador de la sala que se va eliminar.
   */
    delete(id: number) {
      return this.http.delete(this.route + '/' + id).pipe(map(res => res.json()));
    }
  }
  