import { Component, OnInit } from '@angular/core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  faCofaEllipsisVertical = faEllipsisVertical;

  constructor() { }

  ngOnInit(): void {

  }

}
