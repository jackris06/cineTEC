import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocinesComponent } from './registrocines.component';

describe('RegistrocinesComponent', () => {
  let component: RegistrocinesComponent;
  let fixture: ComponentFixture<RegistrocinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrocinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrocinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
