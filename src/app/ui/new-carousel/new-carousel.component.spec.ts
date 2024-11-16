import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarouselComponent } from './new-carousel.component';

describe('NewCarouselComponent', () => {
  let component: NewCarouselComponent;
  let fixture: ComponentFixture<NewCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
