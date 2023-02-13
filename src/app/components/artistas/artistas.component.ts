import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from 'src/app/services/artistas.service';
import { Artista } from '../../shared/models/artista';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
  faUser = faUsers;
  faUserPlus = faUserPlus;
  artistaForm : FormGroup;

  constructor(private serviceArtista : ArtistasService) {
    this.artistaForm = new FormGroup({
      nome: new FormControl(''),
      imagem: new FormControl(''),
    });
  }

  @Input()
  artistas : Artista[] = []

  ngOnInit(): void {
    this.carregarAtistas()
  }

  carregarAtistas():void{
    this.serviceArtista.findAll().subscribe((data)=>{
      this.artistas = data;
    })
  }

   async onSubmit(){
     this.serviceArtista.createArtista(this.artistaForm.value).subscribe(()=>{
      this.carregarAtistas()
     })
  }


}
