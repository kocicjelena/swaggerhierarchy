import { Component }              from '@angular/core';

import { NODES }                 from './nodes';

@Component({
  selector: 'app-available-nodes',
  templateUrl: './available-nodes.component.html',
  styles: ['#flyers, #all {font-style: italic}']
})
export class AvailableNodesComponent {
  nodes: any[] = [];
  available = true;
  mutate = true;
  title = 'employees (pure pipe)';

  constructor() { this.reset(); }

  addNode(name: string) {
    name = name.trim();
    if (!name) { return; }
    let node = {name, available: this.available};
    if (this.mutate) {
    // Pure pipe won't update display because heroes array reference is unchanged
    // Impure pipe will display
    this.nodes.push(node);
    } else {
      // Pipe updates display because heroes array is a new object
      this.nodes = this.nodes.concat(node);
    }
  }

  reset() { this.nodes = NODES.slice(); }
}

////// Identical except for impure pipe //////
@Component({
  selector: 'app-available-nodes-impure',
  templateUrl: './available-nodes-impure.component.html',
  styles: ['.flyers, .all {font-style: italic}'],
})
export class AvailableNodesImpureComponent extends AvailableNodesComponent {
  title = 'employees (impure pipe)';
}
