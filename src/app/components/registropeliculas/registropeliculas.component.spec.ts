import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropeliculasComponent } from './registropeliculas.component';

describe('RegistropeliculasComponent', () => {
  let component: RegistropeliculasComponent;
  let fixture: ComponentFixture<RegistropeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistropeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
