import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropsearchbarComponent } from './dropsearchbar.component';

describe('DropsearchbarComponent', () => {
  let component: DropsearchbarComponent;
  let fixture: ComponentFixture<DropsearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropsearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropsearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
