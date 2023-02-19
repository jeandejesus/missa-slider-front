import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from 'src/app/services/artistas.service';
import { MusicasService } from 'src/app/services/musicas.service';
import { Artista } from 'src/app/shared/models/artista';
import { Musica } from 'src/app/shared/models/musica';

@Component({
  selector: 'app-detalhar-musica',
  templateUrl: './detalhar-musica.component.html',
  styleUrls: ['./detalhar-musica.component.scss'],
})
export class DetalharMusicaComponent implements OnInit {
  faCofaEllipsisVertical = faEllipsisVertical;

  checkoutForm = this.formBuilder.group({
    musica: '',
  });

  artista: Artista = {};
  musica: Musica = {};

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private artistaService: ArtistasService,
    private musicaService: MusicasService
  ) {
    this.route.params.subscribe(async (params) => {
      this.artista = await this.artistaService
        .find(params.idArtista)
        .toPromise();
      this.musicaService.find(params.idMusica).subscribe((data) => {
        data.letras = data.letras?.replace(/(\r\n|\r|\n)/g, '<br>');
        this.musica = data;
      });
    });
  }

  ngOnInit(): void {}

  onSubmit() {}
}
