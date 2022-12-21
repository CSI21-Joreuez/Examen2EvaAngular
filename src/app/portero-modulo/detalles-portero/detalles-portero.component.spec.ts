import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPorteroComponent } from './detalles-portero.component';

describe('DetallesPorteroComponent', () => {
  let component: DetallesPorteroComponent;
  let fixture: ComponentFixture<DetallesPorteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPorteroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPorteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
