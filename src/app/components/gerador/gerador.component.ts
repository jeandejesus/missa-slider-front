import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/shared/models/musica';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss']
})
export class GeradorComponent implements OnInit {

  musicas: Musica[] = [] ;
  partesMissa = Constantes.PARTE_MISSA;
  termo: string = '';
  sequenciaSlides :string[] =[] ;
  fontSize : number = 16;
  formBuilder : any;
  tamanhosFontes = Constantes.TAMANHO_FONTES;
  imagemSeparadora =''
   constructor() {

   }

  ngOnInit(): void {

  console.log(this.partesMissa)
    this.musicas.push({nome: 'yeshua'})
    this.musicas.push({nome: 'Queima de novo'})
    this.musicas.push({nome: 'Fogo Santo'})
    this.musicas.push({nome: 'Mistica sublime'})
    this.musicas.push({nome: 'Casa'})
    this.musicas.push({nome: 'yeshua'})
    this.musicas.push({nome: 'Queima de novo'})
    this.musicas.push({nome: 'Fogo Santo'})
    this.musicas.push({nome: 'Mistica sublime'})
    this.musicas.push({nome: 'Casa'})
    this.musicas.push({nome: 'yeshua'})
    this.musicas.push({nome: 'Queima de novo'})
    this.musicas.push({nome: 'Fogo Santo'})
    this.musicas.push({nome: 'Mistica sublime'})
    this.musicas.push({nome: 'Casa'})
    this.musicas.push({nome: 'yeshua'})
    this.musicas.push({nome: 'Queima de novo'})
    this.musicas.push({nome: 'Fogo Santo'})
    this.musicas.push({nome: 'Mistica sublime'})
    this.musicas.push({nome: 'Casa'})
  }



  limpar(){this.termo = ""}

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
