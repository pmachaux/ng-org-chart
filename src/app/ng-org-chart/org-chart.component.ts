import {
  AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, Type,
  ViewChild
} from "@angular/core";
import {OptionsOrgChart} from "./interfaces/options.interface";
import {DefaultNodeTemplateComponent} from "./default-node-template/default-node-template.component";
import {OrgChartService} from "./services/org-chart.service";
@Component(
  {
    selector: 'org-chart',
    templateUrl: './org-chart.component.html',
    styleUrls: ['./org-chart.component.scss']
  }
)
export class OrgChartComponent{

  private _options: OptionsOrgChart;
  @Input('options') set(value: OptionsOrgChart): void {
    this._options = this.orgChartService.checkOptionsValueAndUpdateStream(value);
  };
  @Input() data: any;

  constructor(private orgChartService: OrgChartService) {}

  @ViewChild('orgChartContainer') orgChartContainer: ElementRef;

}
