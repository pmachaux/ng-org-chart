import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OrgChartService} from "../services/org-chart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'children-elements',
  templateUrl: './children-elements.component.html',
  styleUrls: ['./children-elements.component.css']
})
export class ChildrenElementsComponent {

  @Input() data:any[];
  @Input() parentNode: any;
  @Input() currentDepth: number;

  constructor() { }

}
