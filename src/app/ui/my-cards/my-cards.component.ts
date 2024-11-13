import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-my-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-cards.component.html',
  styleUrl: './my-cards.component.scss'
})
export class MyCardsComponent {
  @Input() image: string = '';
  @Input() description:string = '';
  @Input() title:string = '';
}
