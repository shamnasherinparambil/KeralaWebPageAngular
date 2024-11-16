import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselImage } from '../../interface/bootstrapCards';



@Component({
  selector: 'app-my-carosal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-carosal.component.html',
  styleUrl: './my-carosal.component.scss'
})


export class MyCarosalComponent {
caroselImages:CarouselImage[] = [ {
id:1,
imageSrc:"https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-08t160707.893-min.png"

},
{
  id:2,
  imageSrc:"https://escapeno-web.imgix.net/dam/tripgallery-61/20230918050648/gettyimages-511119924_india_munnar_kerala_teplantasje.jpg?auto=compress%2Cformat&fit=clip&q=90&w=1440&s=1aefd764619d37e05f8da690a48ec432"
},
{
    id:3,
    imageSrc:"https://static.toiimg.com/photo/81695811.cms"
}

]

}
