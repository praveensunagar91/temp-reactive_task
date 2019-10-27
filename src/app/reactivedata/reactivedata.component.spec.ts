import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedataComponent } from './reactivedata.component';

describe('ReactivedataComponent', () => {
  let component: ReactivedataComponent;
  let fixture: ComponentFixture<ReactivedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
