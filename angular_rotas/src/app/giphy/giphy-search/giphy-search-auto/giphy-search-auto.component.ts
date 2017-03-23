import { Component, OnInit } from '@angular/core';
import {GiphySearchComponent} from "../giphy-search.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-giphy-search-auto',
  templateUrl: './giphy-search-auto.component.html',
  styleUrls: ['./giphy-search-auto.component.css']
})
export class GiphySearchAutoComponent extends GiphySearchComponent implements OnInit{

  constructor(protected title: Title) {
    super(title);
  }

  ngOnInit() {
    this.title.setTitle("Gipyh search auto...");
  }

}
