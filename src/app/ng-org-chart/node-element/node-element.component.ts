import {Component, Input, OnInit, Type} from '@angular/core';
import {Subscription} from "rxjs";
import {OrgChartService} from "../services/org-chart.service";
import {DefaultNodeTemplateComponent} from "../default-node-template/default-node-template.component";

@Component({
  selector: 'node-element',
  templateUrl: './node-element.component.html',
  styleUrls: ['./node-element.component.css']
})
export class NodeElementComponent implements OnInit {

  dataNode: any;
  @Input('data') set data(value:any) {
    this.dataNode = value;
    this.componentType = this.getNodeTemplate ? this.getNodeTemplate(this.dataNode) : DefaultNodeTemplateComponent;
  };
  @Input() parentNode: any;
  @Input() currentDepth: number;
  getNodeTemplate: Function;
  maxDepth:number = 999;
  componentType: Type<Component>;
  private _optionSubscription: Subscription;
  constructor(private orgChartService: OrgChartService) { }

  ngOnInit() {
    this._optionSubscription = this.orgChartService.getOptionStream().subscribe(x => {
      this.maxDepth = x.depth;
      this.getNodeTemplate= x.nodeTemplateComponentType;
      this.componentType = this.getNodeTemplate(this.dataNode);
    });
  }

}
