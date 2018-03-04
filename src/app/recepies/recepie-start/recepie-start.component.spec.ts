import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieStartComponent } from './recepie-start.component';

describe('RecepieStartComponent', () => {
  let component: RecepieStartComponent;
  let fixture: ComponentFixture<RecepieStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
