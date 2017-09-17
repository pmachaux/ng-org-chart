import {Component, Input} from '@angular/core';


@Component({
  selector: 'children-elements',
  templateUrl: './children-elements.component.html',
  styleUrls: ['./children-elements.component.scss']
})
export class ChildrenElementsComponent {

  @Input() data:any[];
  @Input() parentNode: any;
  @Input() currentDepth: number;

  constructor() { }

}
