import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalharArtistaComponent } from './detalhar-artista.component';


describe('ArtistaComponent', () => {
  let component: DetalharArtistaComponent;
  let fixture: ComponentFixture<DetalharArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
