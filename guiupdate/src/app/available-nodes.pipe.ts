/* tslint:disable use-pipe-transform-interface */
import { Pipe, PipeTransform } from '@angular/core';

import { Flyer } from './nodes';

@Pipe({ name: 'available' })
export class AvailableNodesPipe implements PipeTransform {
  transform(allNodes: Flyer[]) {
    return allNodes.filter(node => node.available);
  }
}

/////// Identical except for the pure flag
@Pipe({
  name: 'AvailableNodesImpure',
  pure: false
})
export class AvailableNodesImpurePipe extends AvailableNodesPipe {}
