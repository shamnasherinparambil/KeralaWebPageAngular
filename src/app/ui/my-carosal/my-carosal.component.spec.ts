import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarosalComponent } from './my-carosal.component';

describe('MyCarosalComponent', () => {
  let component: MyCarosalComponent;
  let fixture: ComponentFixture<MyCarosalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCarosalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCarosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
