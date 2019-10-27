import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreactiveComponent } from './addreactive.component';

describe('AddreactiveComponent', () => {
  let component: AddreactiveComponent;
  let fixture: ComponentFixture<AddreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
