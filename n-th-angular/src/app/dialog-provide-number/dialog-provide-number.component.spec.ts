import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProvideNumberComponent } from './dialog-provide-number.component';

describe('DialogProvideNumberComponent', () => {
  let component: DialogProvideNumberComponent;
  let fixture: ComponentFixture<DialogProvideNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProvideNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProvideNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
