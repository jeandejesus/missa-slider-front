import { Component, OnInit } from '@angular/core';
import { ArtistasService } from 'src/app/services/artistas.service';
import { MusicasService } from 'src/app/services/musicas.service';
import { OracaoService } from 'src/app/services/oracao.service';
import { Artista } from 'src/app/shared/models/artista';
import { Musica } from 'src/app/shared/models/musica';
import { Oracao } from 'src/app/shared/models/oracao';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss']
})
export class GeradorComponent implements OnInit {

  musicas: Musica[] = [] ;
  artistas: Artista[] = []
  oracoes : Oracao[]= []
  partesMissa = Constantes.PARTE_MISSA;
  termo: string = '';
  sequenciaSlides :string[] =[] ;
  fontSize : number = 16;
  oracaoSelecionada: number = 0;
  formBuilder : any;
  tamanhosFontes = Constantes.TAMANHO_FONTES;
  imagemSeparadora =''


   constructor(private serviceArtista : ArtistasService,private serviceMusica : MusicasService,private oracaoService : OracaoService) {
   }

   ngOnInit():void{
     this.serviceArtista.findAll().subscribe((data)=>{
      this.artistas = data;
    })

    this.oracaoService.buscarOracoes().subscribe((oracoes)=>this.oracoes = oracoes)
  }



  limpar(){this.termo = ""}

  buscarMusicas(event : any){
    this.serviceMusica.findAll(event.value).subscribe((data)=>{
        this.musicas = data
    })
  }

  selectOracao(event:any){
      this.oracaoSelecionada = event.value;
  }

  enviarInformacao(musica : string , parteMissa : number){
    if(this.sequenciaSlides[parteMissa] ){
      this.sequenciaSlides[parteMissa] = musica;
    }else {
      this.sequenciaSlides[parteMissa] = (musica)
    }

  }

  imprimir (){
    const slide = {
      musicas : this.sequenciaSlides,
      fontSize : this.fontSize,
      imagem : this.imagemSeparadora
    }
    console.log(slide)

  }

  selecionarTamanhoDaFonte(event:any){
      this.fontSize = event.value;
  }
}
