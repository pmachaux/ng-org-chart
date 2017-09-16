import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {OptionsOrgChart} from "../interfaces/options.interface";
import {DefaultNodeTemplateComponent} from "../default-node-template/default-node-template.component";

@Injectable()
export class OrgChartService {

  private _options: BehaviorSubject<OptionsOrgChart> = new BehaviorSubject(this.getDefaultOptions());

  constructor() { }

  getDefaultOptions(): OptionsOrgChart{
    return {nodeTemplateComponentType: data => DefaultNodeTemplateComponent, depth: 999}
  }

    checkOptionsValueAndUpdateStream(options: OptionsOrgChart): OptionsOrgChart {
    if (!options) {
      options = this.getDefaultOptions();
    } else {
      if (!options.nodeTemplateComponentType){
        options.nodeTemplateComponentType = DefaultNodeTemplateComponent;
      }
      if (!options.depth || options.depth < 1) {
        options.depth = 999
      }
    }

    this.setOptionStream(options);
    return options;
  }

  getOptionStream():Observable<OptionsOrgChart> {
    return this._options;
  }

  private setOptionStream(options: OptionsOrgChart) {
    this._options.next(options);
  }
}
