import { Injectable } from '@angular/core';
 
import { Asignacionproyecciones } from './asignacionproyecciones.model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AsignacionproyeccionesService {
  route: string;
  selected: Asignacionproyecciones;
  AsignacionproyeccionesLista: Asignacionproyecciones[];
  prueba : string;

  /**Instancia que sirve para interactuar con el API */
  constructor(private http: Http) {
    this.route = 'https://webapi20181116040509.azurewebsites.net/api/values/5';
  }

/**
 * Funcion que sirve para retornar los valores de las proyecciones.
 */
  get() {
    this.http.get(this.route).pipe(map((data: Response) => {
      return data.json() as Asignacionproyecciones[]
    })).toPromise().then(x => {
      this.AsignacionproyeccionesLista =x;
      console.log(this.AsignacionproyeccionesLista);
    })
  }

/**Metodo para enviar datos a las tablas de proyecciones de la base de datos.
 * 
 * @param pAsignacionproyecciones Proyeccion que se desea añadir a la base de datos
 */
  post(pAsignacionproyecciones: Asignacionproyecciones) {
    console.log(JSON.stringify(this.AsignacionproyeccionesLista));
    console.log(JSON.stringify(pAsignacionproyecciones));
    var body = JSON.stringify(pAsignacionproyecciones);
    var headerOptions = new Headers({ 'Content-type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.route, body, requestOptions).pipe(map(x => x.json()));

  }

/**Metodo para modficar atributos de proyecciones.
 * 
 * @param id Identificador de las proyecciones.
 * @param emp La proyeccion que se desea modificar.
 */
  put(id, emp) {
    console.log(JSON.stringify(this.AsignacionproyeccionesLista));
    console.log(JSON.stringify(emp));
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.route + '/' + id, body, requestOptions).pipe(map(res => res.json()));
  }

/** Metodo para eliminar una proyeccion.
 * 
 * @param id Identificador de la proyeccion.
 */
  delete(id: number) {
    return this.http.delete(this.route + '/' + id).pipe(map(res => res.json()));
  }

  /*   exist(pCliente : Asignacionproyecciones){
      for(let cliente of this.AsignacionproyeccionesLista){
        if(cliente.Cedula == pCliente.Cedula){
          console.log(pCliente.Cedula);
          console.log(cliente.Cedula);
          return cliente.Cedula == pCliente.Cedula;
        }
      }
    }  */
}
