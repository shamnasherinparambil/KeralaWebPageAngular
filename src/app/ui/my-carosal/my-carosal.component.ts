import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-carosal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-carosal.component.html',
  styleUrl: './my-carosal.component.scss'
})
export class MyCarosalComponent {
caroselImages=[ {
id:1,
imageSrc:"https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-08t160707.893-min.png"

},
{
  id:2,
  imageSrc:"https://www.tusktravel.com/blog/wp-content/uploads/2023/02/Famous-Beaches-in-Kochi-Kerala.jpg"
},
{
    id:1,
    imageSrc:"https://static.toiimg.com/photo/81695811.cms"
}

]

}
