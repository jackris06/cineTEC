import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { ApproutingModule } from './components/approuting/approuting.module';
import { RegistropeliculasComponent } from './components/registropeliculas/registropeliculas.component';
import { RegistrocinesComponent } from './components/registrocines/registrocines.component';
import { RegistrosalasComponent } from './components/registrosalas/registrosalas.component';
import { AsignacionproyeccionesComponent } from './components/asignacionproyecciones/asignacionproyecciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminViewComponent,
    RegistropeliculasComponent,
    RegistrocinesComponent,
    RegistrosalasComponent,
    AsignacionproyeccionesComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
