import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ArtistasService } from 'src/app/services/artistas.service';
import { FileService } from 'src/app/services/file.service';
import { MusicasService } from 'src/app/services/musicas.service';
import { OracaoService } from 'src/app/services/oracao.service';
import { Artista } from 'src/app/shared/models/artista';
import { Musica } from 'src/app/shared/models/musica';
import { Oracao } from 'src/app/shared/models/oracao';
import { Constantes } from 'src/app/utils/constantes';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss'],
})
export class GeradorComponent implements OnInit {
  musicas: Musica[] = [];
  artistas: Artista[] = [];
  oracoes: Oracao[] = [];
  partesMissa = Constantes.PARTE_MISSA;
  termo: string = '';
  sequenciaSlides: Musica[] = [];
  fontSize: number = 70;
  oracaoSelecionada: number = 0;
  formBuilder: any;
  tamanhosFontes = Constantes.TAMANHO_FONTES;
  imagemSeparadora = '';
  salmo: string = '';
  podeMudarFonte = false;

  constructor(
    private serviceArtista: ArtistasService,
    private serviceMusica: MusicasService,
    private oracaoService: OracaoService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.serviceArtista.findAll().subscribe((data) => {
      this.artistas = data;
    });

    this.oracaoService
      .buscarOracoes()
      .subscribe((oracoes) => (this.oracoes = oracoes));
  }
  limparMusicas(index: number) {  }

  limpar() {
    this.termo = '';
  }

  buscarMusicas(event: any) {
    this.serviceMusica.findAll(event.value).subscribe((data) => {
      this.musicas = data;
    });
  }

  selectOracao(event: any) {
    this.oracaoSelecionada = event.value;
  }

  enviarInformacao(musica: Musica, parteMissa: number) {
    if (this.sequenciaSlides[parteMissa]) {
      this.sequenciaSlides[parteMissa] = musica;
    } else {
      this.sequenciaSlides[parteMissa] = musica;
    }
  }
  receberInformacaoDoSalmo(salmo: string, parteMissa: number) {
    let musica: Musica = {};
    musica.letras = salmo;
    if (this.sequenciaSlides[parteMissa]) {
      this.sequenciaSlides[parteMissa] = musica;
    } else {
      this.sequenciaSlides[parteMissa] = musica;
    }
  }

  imprimir() {
    const slide = {
      musicas: this.sequenciaSlides,
      fontSize: this.fontSize,
      imagem: this.imagemSeparadora,
      idOracao: this.oracaoSelecionada,
      nome: 'missa.PPT',
    };
    console.log(JSON.stringify(slide));

    this.fileService.gerarDoApresentacao(slide).subscribe(() => {
      this.fileService.download(slide.nome).subscribe((blob) => {
        saveAs(blob, 'missa.ppt');
        this.fileService.delete(slide.nome).subscribe((d) => {});
      });
    });
  }

  selecionarTamanhoDaFonte(event: any) {
    this.fontSize = event.value;
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) =>
      result.next(btoa(event.target.result.toString()));
    return result;
  }
}
