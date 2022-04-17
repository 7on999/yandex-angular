import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvAndDzenComponent } from './adv-and-dzen.component';

describe('AdvAndDzenComponent', () => {
  let component: AdvAndDzenComponent;
  let fixture: ComponentFixture<AdvAndDzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvAndDzenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvAndDzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
