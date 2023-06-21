import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebookviewComponent } from './singlebookview.component';

describe('SinglebookviewComponent', () => {
  let component: SinglebookviewComponent;
  let fixture: ComponentFixture<SinglebookviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglebookviewComponent]
    });
    fixture = TestBed.createComponent(SinglebookviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
