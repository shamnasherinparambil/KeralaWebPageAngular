import { Component, Input, NgModule } from '@angular/core';
import { ApiService } from '../../api.service';
import { MyCardsComponent } from '../../ui/my-cards/my-cards.component';
import { SlicePipe } from '@angular/common';
import { NewCarouselComponent } from '../../ui/new-carousel/new-carousel.component';


@Component({
  selector: 'app-shopping-page',
  standalone: true,
  imports: [MyCardsComponent, SlicePipe,NewCarouselComponent],
  templateUrl: './shopping-page.component.html',
  styleUrl: './shopping-page.component.scss',
})
export class ShoppingPageComponent {
  // data: any;
  catagories: any;
  constructor(public api: ApiService) {}
  ngOnInit() {
  //   this.api.getProducts().subscribe((res: any) => {
  //     this.data = res;
  //     console.log(this.data);
      this.api.getCatogories().subscribe((res: any) => {
        this.catagories = res;
        console.log(this.catagories);
      });
    };



}
