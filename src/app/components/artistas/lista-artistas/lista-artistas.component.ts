import { Component, Input, OnInit } from '@angular/core';
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
  artista: Artista = {}

  constructor(private serviceArtista : ArtistasService) {
  }
  ngOnInit(): void {}

  deleteArtista(idArtista : any)
  {
     this.serviceArtista.delete(idArtista).subscribe(()=>{
      document.location.reload();

     })
  }

}
