import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  faEllipsisVertical,
  faUserPlus,
  faLeftLong,
} from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from 'src/app/services/artistas.service';
import { MusicasService } from 'src/app/services/musicas.service';
import { Musica } from 'src/app/shared/models/musica';
import { Artista } from './../../../shared/models/artista';
@Component({
  selector: 'app-detalhar-artista',
  templateUrl: './detalhar-artista..component.html',
  styleUrls: ['./detalhar-artista..component.scss'],
})
export class DetalharArtistaComponent implements OnInit {
  faCofaEllipsisVertical = faEllipsisVertical;
  faUserPlus = faUserPlus;
  @ViewChild('closebutton') closebutton: any;
  musicaForms: FormGroup;
  artista: Artista = {};

  constructor(
    private serviceArtista: ArtistasService,
    private serviceMusica: MusicasService,
    private route: ActivatedRoute
  ) {
    this.musicaForms = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      letras: new FormControl('', [Validators.required]),
      artista: new FormControl(),
      idMusica: new FormControl(''),
    });
  }
  resetForm(): void {
    this.musicaForms.controls.nome.setValue('');
    this.musicaForms.controls.letras.setValue('');
    this.musicaForms.controls.artista.setValue(this.artista);
    this.musicaForms.controls.idMusica.setValue(null);
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.artista = await this.serviceArtista.find(params.id).toPromise();
    });
  }

  get nome() {
    return this.musicaForms.get('nome');
  }

  get letras() {
    return this.musicaForms.get('letras');
  }

  editar(musica: Musica) {
    this.musicaForms.controls.nome.setValue(musica.nome);
    this.musicaForms.controls.letras.setValue(musica.letras);
    this.musicaForms.controls.artista.setValue(this.artista);
    this.musicaForms.controls.idMusica.setValue(musica.idMusica);
  }

  async onSubmit() {
    if (this.musicaForms.valid) {
      this.musicaForms.controls.artista.setValue(this.artista);
      this.serviceMusica.createUpdate(this.musicaForms.value).subscribe(() => {
        this.closebutton.nativeElement.click();
        window.location.reload();
      });
    }
  }
}
