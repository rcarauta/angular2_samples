import { Component, OnInit } from '@angular/core';
import {GiphyService} from './giphy.service';
import {  Response } from '@angular/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  gifs: any[] = [];

  constructor(private giphyService: GiphyService, private title: Title) {

  }

  ngOnInit(): void {
    //muda o titulo da página
    this.title.setTitle("Lista de Giphys");
    
    this.giphyService.pesquisarGiphy()
      .subscribe((response: Response) =>
      this.gifs = response.json().data);
  }

}
