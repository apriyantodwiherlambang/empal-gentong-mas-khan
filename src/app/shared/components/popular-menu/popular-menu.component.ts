import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-menu',
  templateUrl: './popular-menu.component.html',
  styleUrl: './popular-menu.component.css',
})
export class PopularMenuComponent {
  showComingSoonAlert(): void {
    alert('This feature is coming soon!');
  }
}
