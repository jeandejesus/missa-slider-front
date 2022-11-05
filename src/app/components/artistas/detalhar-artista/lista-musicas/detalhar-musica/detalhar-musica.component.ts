import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalhar-musica',
  templateUrl: './detalhar-musica.component.html',
  styleUrls: ['./detalhar-musica.component.scss']
})
export class DetalharMusicaComponent implements OnInit {

  faCofaEllipsisVertical = faEllipsisVertical;

  checkoutForm = this.formBuilder.group({
    musica: ''  });

  constructor(    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const musica = this.checkoutForm.value.musica;

    let resultado = musica.split("\n\n");

    console.log(resultado);



  }



}
