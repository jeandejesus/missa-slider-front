import { Component, Input, OnInit } from '@angular/core';
import { faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Artista } from '../../shared/models/artista';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
  faUser = faUsers;
  faUserPlus = faUserPlus;
    constructor() { }

  @Input()
  artistas : Artista[] = []

  ngOnInit(): void {
    this.artistas.push({ nome: 'colo de Deus', imagem : "/assets/img/logo-artista-tb2.webp"})

    this.artistas.push({ nome: 'Desconhecidos', imagem : ""})

  }

}
