import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreMenuComponent } from './components/explore-menu/explore-menu.component';
import { FaqComponent } from './components/faq/faq.component';
import { HeaderComponent } from './components/header/header.component';
import { HowToOrderComponent } from './components/how-to-order/how-to-order.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopularMenuComponent } from './components/popular-menu/popular-menu.component';
import { SwipperComponent } from './components/swipper/swipper.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    ExploreMenuComponent,
    FaqComponent,
    HeaderComponent,
    HowToOrderComponent,
    NavbarComponent,
    PopularMenuComponent,
    SwipperComponent,
    FooterComponent,
    MapComponent,
  ],
  imports: [CommonModule, GoogleMapsModule],
  exports: [
    ExploreMenuComponent,
    FaqComponent,
    HeaderComponent,
    HowToOrderComponent,
    NavbarComponent,
    PopularMenuComponent,
    SwipperComponent,
    FooterComponent,
    MapComponent,
  ],
})
export class SharedModule {}
