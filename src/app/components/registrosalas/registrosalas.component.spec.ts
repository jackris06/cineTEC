import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosalasComponent } from './registrosalas.component';

describe('RegistrosalasComponent', () => {
  let component: RegistrosalasComponent;
  let fixture: ComponentFixture<RegistrosalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
