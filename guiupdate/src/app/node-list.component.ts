import { Component } from '@angular/core';

@Component({
  selector: 'app-node-list',
  template: `
    <h2>employees from JSON File</h2>

    <div *ngFor="let node of ('localhost:8080/api-docs' | fetch) ">
      {{node.name}}
    </div>

    <p>employees as JSON:
      {{'localhost:8080/api-docs' | fetch | json}}
    </p>`
})
export class NodeListComponent { }
