import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favlinks = ['https://www.google.com', 'https://www.linkedin.com']
  constructor() { }

  ngOnInit() {
  }

}
