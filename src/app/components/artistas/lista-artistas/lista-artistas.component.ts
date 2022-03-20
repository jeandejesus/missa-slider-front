import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Artista } from '../../../shared/models/artista';

@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.scss']
})
export class ListaArtistasComponent implements OnInit {

  faCofaEllipsisVertical = faEllipsisVertical;
  @Input()
  artista : Artista = {}

  constructor() { }

  ngOnInit(): void {
  }

}
