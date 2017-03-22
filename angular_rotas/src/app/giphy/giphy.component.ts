import { Component, OnInit } from '@angular/core';
import {GiphyService} from './giphy.service';
import {  Response } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  gifs: any[] = [];

  private id: number = 0;

  constructor(private giphyService: GiphyService, private title: Title,
  private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    //muda o titulo da página
    this.title.setTitle("Lista de Giphys");

     this.router.params.subscribe((objeto: any) =>{
       this.id = objeto.id;
     })

    this.giphyService.pesquisarGiphy()
      .subscribe((response: Response) =>
      this.gifs = response.json().data);
  }

}
