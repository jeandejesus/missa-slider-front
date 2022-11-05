import { Component, Input, OnInit } from '@angular/core';
import {
  faEllipsisVertical,
  faTrash,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
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
  artista: Artista = {};

  musicas: Musica[] = [];

  constructor() {}

  ngOnInit(): void {
    this.musicas.push({ nome: 'yeshua' });
    this.musicas.push({ nome: 'Queima de novo' });
    this.musicas.push({ nome: 'Fogo Santo' });
    this.musicas.push({ nome: 'Mistica sublime' });
    this.musicas.push({ nome: 'Casa' });
  }

  deletar(): void {}
}
