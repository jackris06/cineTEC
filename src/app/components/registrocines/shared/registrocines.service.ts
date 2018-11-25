import { Injectable } from '@angular/core';

import { Registrocines } from './registrocines.model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegistrocinesService {
   route : string;
   selected : Registrocines;
   registrocinesLista : Registrocines[];
/**
 * 
 * @param http Se inyecta la instancia de Http para interactuar con el API.
 */ 
   constructor(private http: Http) {
     this.route = 'https://webapi20181116040509.azurewebsites.net/api/values/5';
    }
 
 /**
  * Metodo que sirve para obtener los valores del modelado de los cines.
  */
   get(){
     this.http.get(this.route).pipe(map((data :Response) =>{
       return data.json() as Registrocines[]
     })).toPromise().then(x => {
       this.registrocinesLista = x;
     })
   }  
 
/**Establece la conexion y envia los datos necesarios de la aplicacion de administrador a la base de datos.
 * 
 * @param pRegistrocines Instancia particular de los cines.
 */   
   post(pRegistrocines : Registrocines){
     console.log(JSON.stringify(this.registrocinesLista));
     console.log(JSON.stringify(pRegistrocines));
     var body = JSON.stringify(pRegistrocines);
     var headerOptions = new Headers({'Content-type': 'application/json'});
     var requestOptions = new RequestOptions({method : RequestMethod.Post, headers:headerOptions});
     return this.http.post(this.route,body,requestOptions).pipe(map(x => x.json()));
   }

 /**
  * 
  * @param id Identificador de la tabla principal de las que se desea guardar.
  * @param emp El cine que se desea modificar.
  */
   put(id,emp){
     console.log(JSON.stringify(this.registrocinesLista));    
     console.log(JSON.stringify(emp));
     var body = JSON.stringify(emp);
     var headerOptions = new Headers({'Content-type': 'application/json'});
     var requestOptions = new RequestOptions({method : RequestMethod.Put, headers:headerOptions});
     return this.http.put(this.route+'/'+id,body,requestOptions).pipe(map(res => res.json()));
   }
   
   /**
    * 
    * @param id Identificador del que se desea eliminar una instancia.
    */
   delete(id : number){
     return this.http.delete(this.route+'/'+id).pipe(map(res => res.json()));
   }
 }

