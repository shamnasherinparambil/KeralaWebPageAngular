import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {
  @Input() title: string = '';
  @Input() color: string = '';

}
