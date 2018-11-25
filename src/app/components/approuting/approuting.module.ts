import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../login/login.component';
import { AdminViewComponent} from '../admin-view/admin-view.component';
import { RegistropeliculasComponent } from '../registropeliculas/registropeliculas.component';
import { RegistrocinesComponent } from '../registrocines/registrocines.component';
import { AsignacionproyeccionesComponent } from '../asignacionproyecciones/asignacionproyecciones.component';
import { RegistrosalasComponent } from '../registrosalas/registrosalas.component';

/**
 * Constrante que contiene las rutas de todas los componentes que conforman la aplicación.
 */
const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch : 'full' },
  { path: '', component: AdminViewComponent}, 
  { path: 'registropeliculas', component: RegistropeliculasComponent},
  { path: 'registrocines', component: RegistrocinesComponent},
  { path: 'registrosalas', component: RegistrosalasComponent},
  { path: 'asignacionproyecciones', component: AsignacionproyeccionesComponent }
  //{ path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ApproutingModule { }
