import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faEllipsisVertical,
  faTrash,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { MusicasService } from 'src/app/services/musicas.service';
import { Artista } from 'src/app/shared/models/artista';
import { Musica } from 'src/app/shared/models/musica';

@Component({
  selector: 'app-lista-musicas',
  templateUrl: './lista-musicas.component.html',
  styleUrls: ['./lista-musicas.component.scss'],
})
export class ListaMusicasComponent implements OnInit {
  faCofaEllipsisVertical = faEllipsisVertical;
  faTrash = faTrash;
  faPencil = faPencil;

  @Input()
  idArtista: any;

  musicas: Musica[] = [];
  @Output()
  musica = new EventEmitter<Musica>();

  idMusicaDelete: number = 0;

  constructor(
    private muscicaService: MusicasService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (params) => {
      this.musicas = await this.muscicaService.findAll(params.id).toPromise();
    });
  }

  editar(musica: Musica) {
    this.musica.emit(musica);
  }

  deleteMusica(idMusica: any) {
    this.idMusicaDelete = idMusica;
  }
  confirmarDelete(): void {
    this.muscicaService.delete(this.idMusicaDelete).subscribe(() => {
      window.location.reload();
    });
  }
}
