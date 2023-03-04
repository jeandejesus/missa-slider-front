import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss']
})
export class ModalConfirmacaoComponent implements OnInit {

  @Output() confirmacao = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  confirmar(){
    this.confirmacao.emit(true)
  }

}
