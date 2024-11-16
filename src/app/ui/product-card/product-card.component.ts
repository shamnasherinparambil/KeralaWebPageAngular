import { SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductCard } from '../../interface/bootstrapCards';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {


  @Input() cards:ProductCard={
    id:0,
    title:'',
    image:'',
    description:'',
    price:0,
  }


}
