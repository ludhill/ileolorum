import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XireComponent } from './xire.component';

describe('XireComponent', () => {
  let component: XireComponent;
  let fixture: ComponentFixture<XireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
