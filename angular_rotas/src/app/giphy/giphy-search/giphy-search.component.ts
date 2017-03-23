import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.css']
})
export class GiphySearchComponent implements OnInit {

  constructor(protected title: Title) { }

  ngOnInit() {
    this.title.setTitle("Gipyh search...");
  }

}
