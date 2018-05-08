import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  template: `
    <h2>employees from JSON File</h2>

    <div *ngFor="let hero of ('assets/heroes.json' | fetch) ">
      {{hero.name}}
    </div>

    <p>employees as JSON:
      {{'assets/heroes.json' | fetch | json}}
    </p>`
})
export class HeroListComponent { }
