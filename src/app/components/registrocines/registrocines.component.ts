import { Component, OnInit } from '@angular/core';

import { RegistrocinesService } from './shared/registrocines.service';
import { NgForm } from '@angular/forms';
import { Registrocines } from './shared/registrocines.model';

@Component({
  selector: 'app-registrocines',
  templateUrl: './registrocines.component.html',
  styleUrls: ['./registrocines.component.css'],
  providers : [Registrocines]
})
export class RegistrocinesComponent implements OnInit {

  constructor(private Registrocines: RegistrocinesService) { }

  //Metodo inicio, resetea el formulario y pide los clientes
  ngOnInit() {
    this.resetForm();
    this.Registrocines.get();
  }

  //Reinicia los valores del formulario (Lo deja solo con los placeholders)
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.Registrocines.selected = {
      NombreCine: '',
      Ubicacion: '',
      CantidadSalas: null,
      Clasifacion: null
    }

  }

  //Funcion llamada cuando se hace una actualizacion
  onUpdate(form: NgForm) {
    //console.log(!this.Registrocines.exist(form.value));
    this.Registrocines.put(form.value.Cedula, form.value)
      .subscribe(data => {
        this.Registrocines.get();
        this.resetForm(form);
        console.log('Successfully Updated.');
      });
  }


  /**
   * 
   * @param form Formulario que contiene la informacion de los cines.
   */
  onSubmit(form: NgForm) {
    //console.log(!this.Registrocines.exist(form.value));
    this.Registrocines.post(form.value).subscribe(data => {
      this.Registrocines.get();
      this.resetForm(form);
      console.log('Succesfully Posted.')
    })
  }
/**
 * 
 * @param pRegistrocines Funcion que sirve para desplegar el formulario para editar.
 */
  showForEdit(pRegistrocines: Registrocines) {
    this.Registrocines.selected = Object.assign({}, pRegistrocines);
  }

/**
 * 
 * @param id Identificador que sirve para elminar un valor de la vista de cines.
 */
  onDelete(id: number) {
    this.Registrocines.delete(id)
      .subscribe(x => {
        this.Registrocines.get();
        console.log('Succesfully DELETED.');
      })
  }
}
