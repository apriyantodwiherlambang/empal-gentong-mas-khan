import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  // Koordinat untuk Empal Gentong Mas Khan
  lat = -6.194627098071497;
  lng = 106.79487903925684;
  zoom = 15;
  address =
    'Jl. Anggrek Garuda No.h 10, RT.1/RW.5, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480.';
}
