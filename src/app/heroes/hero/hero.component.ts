import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  setHeroName(): void {
    this.name = 'Spiderman';
  }

  setHeroAge(): void {
    this.age = 40;
  }

  resetForm(): void {
    this.age = 45;
    this.name = 'Ironman';
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
}
