import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QContentComponent } from './q-content.component';

describe('QContentComponent', () => {
  let component: QContentComponent;
  let fixture: ComponentFixture<QContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
