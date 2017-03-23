import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ContatoServiceService} from "./contato-service.service";


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoServiceService) { }

  ngOnInit() {
  }

  //usar o contatoForm?.error para atributos que possam ser nulos

  enviarContato(contatoForm: NgForm) {
    console.log(contatoForm.value);

    this.contatoService.enviarContato(contatoForm.value).subscribe(
      (response) =>
      console.log("response ",response)
    )
  }

}
