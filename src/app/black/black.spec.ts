import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Black } from './black';

describe('Black', () => {
  let component: Black;
  let fixture: ComponentFixture<Black>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Black],
    }).compileComponents();

    fixture = TestBed.createComponent(Black);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
