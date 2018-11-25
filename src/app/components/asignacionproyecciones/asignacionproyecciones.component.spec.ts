import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionproyeccionesComponent } from './asignacionproyecciones.component';

describe('AsignacionproyeccionesComponent', () => {
  let component: AsignacionproyeccionesComponent;
  let fixture: ComponentFixture<AsignacionproyeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionproyeccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionproyeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
