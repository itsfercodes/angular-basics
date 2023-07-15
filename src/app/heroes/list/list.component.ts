import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: String[] = [
    'Spiderman',
    'Ironman',
    'Thor',
    'Black Widow',
    'Captain America',
  ];
  public deletedHero?: String;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
