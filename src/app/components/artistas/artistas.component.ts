import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from 'src/app/services/artistas.service';
import { Artista } from '../../shared/models/artista';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss'],
})
export class ArtistasComponent implements OnInit {
  faUser = faUsers;
  faUserPlus = faUserPlus;
  artistaForm: FormGroup;
  @ViewChild('closebutton') closebutton: any;

  @Input()
  artistas: Artista[] = [];

  artista: Artista = {};

  constructor(private serviceArtista: ArtistasService) {
    this.artistaForm = new FormGroup({
      nome: new FormControl(''),
      imagem: new FormControl(''),
      idArtista: new FormControl(),
    });
  }

  ngOnInit(): void {}

  resetFrom() {
    this.artistaForm.controls.nome.setValue('');
    this.artistaForm.controls.idArtista.setValue(null);
    this.artistaForm.controls.imagem.setValue(null);

  }

  editar(artista: Artista) {
    this.artistaForm.controls.nome.setValue(artista.nome);
    this.artistaForm.controls.idArtista.setValue(artista.idArtista);
    this.artistaForm.controls.imagem.setValue(artista.imagem);

  }

  async onSubmit() {
    this.serviceArtista.createUpdate(this.artistaForm.value).subscribe(() => {
      this.closebutton.nativeElement.click();
      window.location.reload();
    });
  }
}
