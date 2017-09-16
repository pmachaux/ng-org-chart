import {Component, OnInit} from '@angular/core';
import {OrgChartService} from "../services/org-chart.service";

@Component({
  selector: 'default-node-template',
  templateUrl: './default-node-template.component.html',
  styleUrls: ['./default-node-template.component.css']
})
export class DefaultNodeTemplateComponent {

  data: any;
  constructor() { }

  onNewData(data: any ): void {
    this.data = data;
  }

}
