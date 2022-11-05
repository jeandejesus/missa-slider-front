import { Component, OnInit } from '@angular/core';
import { faEllipsisVertical, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Artista } from './../../../shared/models/artista';
@Component({
  selector: 'app-detalhar-artista.',
  templateUrl: './detalhar-artista..component.html',
  styleUrls: ['./detalhar-artista..component.scss']
})
export class DetalharArtistaComponent implements OnInit {

  faCofaEllipsisVertical = faEllipsisVertical;
  faUserPlus = faUserPlus

  artista : Artista = {}
  constructor() { }

  ngOnInit(): void {

    this.artista = {
      nome: "Colo De Deus"
    }

  }

}
