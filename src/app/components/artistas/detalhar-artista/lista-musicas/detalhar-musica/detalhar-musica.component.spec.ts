import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharMusicaComponent } from './detalhar-musica.component';

describe('DetalharMusicaComponent', () => {
  let component: DetalharMusicaComponent;
  let fixture: ComponentFixture<DetalharMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
