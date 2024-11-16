import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './my-nav-bar.component.html',
  styleUrl: './my-nav-bar.component.scss'
})
export class MyNavBarComponent {

}
