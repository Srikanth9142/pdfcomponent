import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbooklistComponent } from './textbooklist.component';

describe('TextbooklistComponent', () => {
  let component: TextbooklistComponent;
  let fixture: ComponentFixture<TextbooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
