import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactStats } from './impact-stats';

describe('ImpactStats', () => {
  let component: ImpactStats;
  let fixture: ComponentFixture<ImpactStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
