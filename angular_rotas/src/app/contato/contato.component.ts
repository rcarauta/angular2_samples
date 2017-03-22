import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //usar o contatoForm?.error para atributos que possam ser nulos

  enviarContato(contatoForm: NgForm) {
    console.log(contatoForm.value);
  }

}
