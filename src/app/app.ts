import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  myData: any[] = [];

  constructor() {
    this.log();
  }

  log() {
    fetch('https://api.github.com/search/repositories?q=created:>2025-10-13&sort=stars&order=desc')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        this.myData = data.items;
        console.log(this.myData[0].name);
      })
      .catch((error) => console.error(error));
  }
}
