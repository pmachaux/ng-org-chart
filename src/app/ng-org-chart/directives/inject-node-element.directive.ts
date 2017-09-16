import {
  Component, ComponentFactoryResolver, Directive, Input, OnChanges, SimpleChanges, Type,
  ViewContainerRef
} from '@angular/core';
import {DefaultNodeTemplateComponent} from "../default-node-template/default-node-template.component";


@Directive({
  selector: '[inject-node-element]'
})
export class InjectNodeElementDirective implements OnChanges{

  @Input() component: Type<Component> = DefaultNodeTemplateComponent;
  @Input() data: any;

  currentInstance: DefaultNodeTemplateComponent;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.component) {
      this.component = changes.component.currentValue ? changes.component.currentValue: DefaultNodeTemplateComponent;
      let factory = this.componentFactoryResolver.resolveComponentFactory(this.component);
      this.currentInstance = <DefaultNodeTemplateComponent> this.viewContainerRef.createComponent(factory).instance;
      this.currentInstance.onNewData(this.data);

    }
    if(changes.data) {
      this.data = changes.data.currentValue;
      this.currentInstance.onNewData(this.data);
    }
  }

}
