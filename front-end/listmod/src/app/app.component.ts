import { ModuloService } from './modulo.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modulos = [];
  @ViewChild('tabela', { static: true }) grid;

  constructor(private moduloService: ModuloService) {}

  // tslint:disable-next-line:typedef
  pesquisar() {
    this.moduloService.consultar()
    .then(modulos => {
        this.modulos = modulos;
    });

  }

}
