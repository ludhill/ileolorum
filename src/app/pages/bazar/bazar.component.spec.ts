import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazarComponent } from './bazar.component';

describe('BazarComponent', () => {
  let component: BazarComponent;
  let fixture: ComponentFixture<BazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BazarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
