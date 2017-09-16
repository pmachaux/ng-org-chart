import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNodeTemplateComponent } from './default-node-template.component';

describe('DefaultNodeTemplateComponent', () => {
  let component: DefaultNodeTemplateComponent;
  let fixture: ComponentFixture<DefaultNodeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultNodeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultNodeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
