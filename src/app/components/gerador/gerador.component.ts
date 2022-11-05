import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/shared/models/musica';

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss']
})
export class GeradorComponent implements OnInit {

  musicas: Musica[] = [] ;
   constructor() { }

  ngOnInit(): void {
    this.musicas.push({nome: 'yeshua'})
    this.musicas.push({nome: 'Queima de novo'})
    this.musicas.push({nome: 'Fogo Santo'})
    this.musicas.push({nome: 'Mistica sublime'})
    this.musicas.push({nome: 'Casa'})
  }

}
