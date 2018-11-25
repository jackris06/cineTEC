import { Component, OnInit } from '@angular/core';
 
import { AsignacionproyeccionesService } from './shared/asignacionproyecciones.service';
import { NgForm } from '@angular/forms';
import { Asignacionproyecciones } from './shared/asignacionproyecciones.model';

@Component({
  selector: 'app-asignacionproyecciones',
  templateUrl: './asignacionproyecciones.component.html',
  styleUrls: ['./asignacionproyecciones.component.css'],
  providers: [AsignacionproyeccionesService]
})
export class AsignacionproyeccionesComponent implements OnInit {

  constructor(private AsigProy: AsignacionproyeccionesService) { }

  //Metodo inicio, resetea el formulario y pide los clientes
  ngOnInit() {
    this.resetForm();
    this.AsigProy.get();
  }
 
  //Reinicia los valores del formulario (Lo deja solo con los placeholders)
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.AsigProy.selected = {
      IDProyeccion : null,
      IDCartelera : null,
      IDSala : null,
      FechaProyeccion: '',
      HoraProyeccion : null
    }

  }

  //Funcion llamada cuando se hace una actualizacion
  onUpdate(form: NgForm) {
    //console.log(!this.AsigProy.exist(form.value));
    this.AsigProy.put(form.value.Cedula, form.value)
      .subscribe(data => {
        this.AsigProy.get();
        this.resetForm(form);
        console.log('Successfully Updated.');
      });
  }
 

  /** Metodo cuando se envía el formulario para  añadir nuevas proyecciones.
   * 
   * @param form Datos que representan las proyecciones
   */
  onSubmit(form: NgForm) {
    //console.log(!this.AsigProy.exist(form.value));

      this.AsigProy.post(form.value).subscribe(data => {
        this.AsigProy.get();
        this.resetForm(form);
        console.log('Succesfully Posted.')
      })
  }
/**
 * Muestra el formulario para editar las proyecciones.
 */
  showForEdit(pAsigProy: Asignacionproyecciones) {
    this.AsigProy.selected = Object.assign({}, pAsigProy);
  }

/**Metodo para eliminar proyecciones de la base de datos.
 * 
 * @param id Identificador de la proyeccion
 */
  onDelete(id: number) {
    this.AsigProy.delete(id)
      .subscribe(x => {
        this.AsigProy.get();
        console.log('Succesfully DELETED.');
      })
  }
}
