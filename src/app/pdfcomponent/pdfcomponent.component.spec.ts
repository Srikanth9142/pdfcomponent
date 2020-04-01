import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfcomponentComponent } from './pdfcomponent.component';

describe('PdfcomponentComponent', () => {
  let component: PdfcomponentComponent;
  let fixture: ComponentFixture<PdfcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
