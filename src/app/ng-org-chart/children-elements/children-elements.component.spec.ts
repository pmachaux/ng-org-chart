import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenElementsComponent } from './children-elements.component';

describe('ChildrenElementsComponent', () => {
  let component: ChildrenElementsComponent;
  let fixture: ComponentFixture<ChildrenElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
