import { Component, OnInit } from '@angular/core';
import { RegistropeliculasService } from './shared/registropeliculas.service';
import { NgForm } from '@angular/forms';
import { Pelicula } from './shared/pelicula.model';

@Component({
  selector: 'app-registropeliculas',
  templateUrl: './registropeliculas.component.html',
  styleUrls: ['./registropeliculas.component.css'],
  providers: [RegistropeliculasService]
})
export class RegistropeliculasComponent implements OnInit {

  constructor(private Pelicula: RegistropeliculasService) { }

  //Metodo inicio, resetea el formulario y pide los clientes
  ngOnInit() {
    this.resetForm();
    this.Pelicula.get();
  }

  //Reinicia los valores del formulario (Lo deja solo con los placeholders)
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.Pelicula.selected = {
      NombreOriginal: '',
      Nombre: '',
      Imagen: '',
      Duracion: null,
      NombreDirector: '',
      ApellidoDirector: '',
      Clasificacion: '',
      ID_Pelicula: null,
      gett() {
        return this.Nombre + "&" +
          this.NombreOriginal + "&" +
          this.Duracion + "&" +
          this.NombreDirector + "&" +
          this.ApellidoDirector + "&" +
          this.Clasificacion;
      }
    }

  }

  //Funcion llamada cuando se hace una actualizacion
  onUpdate(form: NgForm) {
    this.Pelicula.put(form.value.Cedula, form.value)
      .subscribe(data => {
        this.Pelicula.get();
        this.resetForm(form);
        console.log('Successfully Updated.');
      });
  }


  /**
   * 
   * @param form Formulario que contiene los valores para postear una pelicula.
   */
  onSubmit(form: NgForm) {
    this.Pelicula.post(form.value).subscribe(data => {
      this.Pelicula.get();
      this.resetForm(form);
      console.log('Succesfully Posted.')
    })
  }

  /** Metodo que muestra los valores de la pelicula para modificar.
   * 
   * @param pPelicula Pelicula que se desea modificar.
   */
  showForEdit(pPelicula: Pelicula) {
    this.Pelicula.selected = Object.assign({}, pPelicula);
  }

  /** Elimina una pelicula.
   * 
   * @param id Representa el valor de la pelicula que se desea eliminar.
   */
  onDelete(id: number) {
    this.Pelicula.delete(id)
      .subscribe(x => {
        this.Pelicula.get();
        console.log('Succesfully DELETED.');
      })
  }
}