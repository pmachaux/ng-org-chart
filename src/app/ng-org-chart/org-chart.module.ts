import {NgModule} from "@angular/core";
import {OrgChartComponent} from "./org-chart.component";
import {OrgChartService} from "./services/org-chart.service";
import { InjectNodeElementDirective } from './directives/inject-node-element.directive';
import { DefaultNodeTemplateComponent } from './default-node-template/default-node-template.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { ChildrenElementsComponent } from './children-elements/children-elements.component';
import { NodeElementComponent } from './node-element/node-element.component';

@NgModule({
  declarations:[OrgChartComponent, InjectNodeElementDirective, DefaultNodeTemplateComponent, ChildrenElementsComponent, NodeElementComponent],
  exports:[OrgChartComponent],
  entryComponents:[DefaultNodeTemplateComponent],
  providers:[OrgChartService],
  imports:[CommonModule, FormsModule]
})

export class NgOrgChartModule {}
