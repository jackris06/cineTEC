import { Injectable } from '@angular/core';

import { Pelicula } from './pelicula.model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegistropeliculasService {
  route: string;
  selected: Pelicula;
  peliculaLista: Pelicula[];
  prueba: string;
  pEntry: string;

  /**
   * Inicializa la ruta con la que se une en el Azure.
   * 
   * @param http Parametro para la conexion de http
   */
  constructor(private http: Http) {
    this.route = 'https://webapi20181116040509.azurewebsites.net/';
  }

  /**
   * Retorna los valores necesarios para desplegar la tabla.
   */
  get() {
    this.http.get(this.route+"api/values").pipe(map((data: Response) => {
      return data.json() as Pelicula[]
    })).toPromise().then(x => {
      this.peliculaLista = x;
      console.log(this.peliculaLista);
    })
  }

  /**
   * Metodo que sirve para postear en la base de datos una nueva pelicula.
   * 
   * @param pPelicula La pelicula que se desea insertar dentro de la base de datos.
   */
  post(pPelicula: Pelicula) {

    this.pEntry = "SELECTInsertarPeli" +
      pPelicula.Nombre + "and" +
      pPelicula.NombreOriginal + "and" +
      pPelicula.Duracion + "and" +
      pPelicula.NombreDirector + "and" +
      pPelicula.ApellidoDirector + "and" +
      pPelicula.Clasificacion;
    console.log(this.pEntry);
    console.log(JSON.stringify(pPelicula));
    var body = JSON.stringify(pPelicula);
    var headerOptions = new Headers({ 'Content-type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.route +"api/"+ this.pEntry, this.pEntry, requestOptions).pipe(map(x => x.json()));

  }
  /** Hace modificaciones de la pelicula.
   * 
   * @param id ID de la pelicula que se desea postear
   * @param emp Pelicula que se desea postear
   */
  put(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.route + '/' + id, body, requestOptions).pipe(map(res => res.json()));
  }
  /**
   * 
   * @param id El valor del identificador de lo que se quiere borrar.
   */
  delete(id: number) {
    return this.http.delete(this.route + '/' + id).pipe(map(res => res.json()));
  }
}
