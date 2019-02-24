import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRantComponent } from './new-rant.component';

describe('NewRantComponent', () => {
  let component: NewRantComponent;
  let fixture: ComponentFixture<NewRantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
