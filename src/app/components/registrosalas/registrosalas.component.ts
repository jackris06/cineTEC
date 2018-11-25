import { Component, OnInit } from '@angular/core';

import { RegistrosalasService } from './shared/registrosalas.service';
import { NgForm } from '@angular/forms';
import { Registrosalas } from './shared/registrosalas.model';

@Component({
  selector: 'app-registrosalas',
  templateUrl: './registrosalas.component.html',
  styleUrls: ['./registrosalas.component.css'],
  providers: [RegistrosalasService]
})
export class RegistrosalasComponent implements OnInit {
  constructor(private Sala: RegistrosalasService) { }

  //Metodo inicio, resetea el formulario y pide los clientes
  ngOnInit() {
    this.resetForm();
    this.Sala.get();
  }
 
  //Reinicia los valores del formulario (Lo deja solo con los placeholders)
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.Sala.selected = {
      numeroSala : null,
      nombreCine : '',
      filas: null,
      columnas : null,
      capacidad : null,
      //-----------------------------
      ID_Sala : null
    }

  }

  /**
   * 
   * @param form Formulario que contiene la información de las salas.
   */
  onUpdate(form: NgForm) {
    //console.log(!this.Sala.exist(form.value));
    this.Sala.put(form.value.Cedula, form.value)
      .subscribe(data => {
        this.Sala.get();
        this.resetForm(form);
        console.log('Successfully Updated.');
      });
  }
 

  /**
   * 
   * @param form Formulario que contiene los datos de la sala.
   */
  onSubmit(form: NgForm) {
    //console.log(!this.Sala.exist(form.value));

      this.Sala.post(form.value).subscribe(data => {
        this.Sala.get();
        this.resetForm(form);
        console.log('Succesfully Posted.')
      })
  }
  
/**
 * 
 * @param pSala Muestra la sala que se modificiará.
 */
  showForEdit(pSala: Registrosalas) {
    this.Sala.selected = Object.assign({}, pSala);
  }

/**
 * 
 * @param id Identificador de la sala que se desea eliminar.
 */
  onDelete(id: number) {
    this.Sala.delete(id)
      .subscribe(x => {
        this.Sala.get();
        console.log('Succesfully DELETED.');
      })
  }
}
