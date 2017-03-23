import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

const host = "http://dbapi.io/db/coll";

@Injectable()
export class ContatoServiceService {

  constructor(private http: Http) { }

  enviarContato(contatoForm: any): Observable<Response> {
    let nome = contatoForm.nome;
    let email = contatoForm.contato.email;

    return this.http.post(host, {nome:nome, email:email});
  }

}
