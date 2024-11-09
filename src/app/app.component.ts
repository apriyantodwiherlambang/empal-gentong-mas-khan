import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'empal-gentong-maskhan';

  internalMessage: string = 'This is my internal message app.component';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import Flowbite
      const { initFlowbite } = await import('flowbite');
      initFlowbite();
    }
  }
  receiveMessage($message: string): void {
    this.internalMessage = $message;
  }
}
