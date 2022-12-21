import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteroModuloComponent } from './portero-modulo.component';

describe('PorteroModuloComponent', () => {
  let component: PorteroModuloComponent;
  let fixture: ComponentFixture<PorteroModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteroModuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorteroModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
