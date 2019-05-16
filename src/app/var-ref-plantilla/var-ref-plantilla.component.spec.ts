import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarRefPlantillaComponent } from './var-ref-plantilla.component';

describe('VarRefPlantillaComponent', () => {
  let component: VarRefPlantillaComponent;
  let fixture: ComponentFixture<VarRefPlantillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarRefPlantillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarRefPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
