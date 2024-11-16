import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuPageComponent } from './du-page.component';

describe('DuPageComponent', () => {
  let component: DuPageComponent;
  let fixture: ComponentFixture<DuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
