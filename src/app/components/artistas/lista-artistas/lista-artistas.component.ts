import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faEllipsisVertical,
  faTrash,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from 'src/app/services/artistas.service';
import { Artista } from '../../../shared/models/artista';

@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.scss'],
})
export class ListaArtistasComponent implements OnInit {
  faCofaEllipsisVertical = faEllipsisVertical;
  faTrash = faTrash;
  faPencil = faPencil;

  @Input()
  artistas: Artista[] = [];

  @Output()
  artista = new EventEmitter<Artista>();

  idArtistaDelete!: number;

  constructor(private serviceArtista: ArtistasService) {}
  ngOnInit(): void {
    this.carregarAtistas();
  }

  confirmarDelete() {
    this.serviceArtista.delete(this.idArtistaDelete).subscribe(() => {
      document.location.reload();
    });
  }
  deletar(idArtista: number = 0) {
    this.idArtistaDelete = idArtista;
  }

  carregarAtistas(): void {
    this.serviceArtista.findAll().subscribe((data) => {
      this.artistas = data;
    });
  }

  editarArtista(artista: Artista) {
    this.artista.emit(artista);
  }
}
