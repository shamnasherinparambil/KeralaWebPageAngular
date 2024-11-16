import { Component, Input, NgModule } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-new-carousel',
  standalone: true,
  imports: [CarouselModule,ProductCardComponent],
  templateUrl: './new-carousel.component.html',
  styleUrl: './new-carousel.component.scss'
})


export class NewCarouselComponent {
@Input() data:any;
@Input() cat=" ";
constructor(public api: ApiService) {}
  ngOnInit() {
    this.api.getProducts().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
