import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArtistasService } from 'src/app/services/artistas.service';
import { MusicasService } from 'src/app/services/musicas.service';
import { Artista } from 'src/app/shared/models/artista';
import { Musica } from 'src/app/shared/models/musica';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.scss'],
})
export class SeletorComponent implements OnInit {
  artistas: Artista[] = [];
  musicas: Musica[] = [];
  termo: string = '';
  selecionada = 0;

  @Output()
  musicaSelecionada = new EventEmitter<Musica>();

  @Input()
  parte: any;
  constructor(
    private serviceArtista: ArtistasService,
    private serviceMusica: MusicasService
  ) {}

  ngOnInit(): void {
    this.serviceArtista.findAll().subscribe((data) => {
      this.artistas = data;
    });
  }

  buscarMusicas(event: any) {
    this.serviceMusica.findAll(event.value).subscribe((data) => {
      this.musicas = data;
    });
  }

  limpar() {
    this.termo = '';
  }

  enviarInformacao(musica: Musica) {
    this.musicaSelecionada.emit(musica);
  }
}
