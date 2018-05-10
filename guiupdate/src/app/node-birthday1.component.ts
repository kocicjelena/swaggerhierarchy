import { Component } from '@angular/core';

@Component({
  selector: 'app-node-birthday',
  template: `<p>The hero's birthday is {{ birthday | date }}</p>`
})
export class NodeBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
