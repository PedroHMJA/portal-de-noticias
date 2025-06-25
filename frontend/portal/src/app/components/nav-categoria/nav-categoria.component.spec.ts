import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCategoriaComponent } from './nav-categoria.component';

describe('NavCategoriaComponent', () => {
  let component: NavCategoriaComponent;
  let fixture: ComponentFixture<NavCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
