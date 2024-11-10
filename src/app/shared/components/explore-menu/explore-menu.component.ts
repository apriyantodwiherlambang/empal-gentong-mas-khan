import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-menu',
  templateUrl: './explore-menu.component.html',
  styleUrl: './explore-menu.component.css',
})
export class ExploreMenuComponent {
  // Array of all items
  items = [
    // Makanan
    {
      category: 'makanan',
      name: 'Kerupuk',
      image:
        'https://food-cms.grab.com/compressed_webp/items/IDITE2024052000084507793/detail/menueditor_item_80839fe0646447019c6a9a9b1231c327_1716163497754462128.webp',
    },
    {
      category: 'makanan',
      name: 'Nasi Putih',
      image:
        'https://food-cms.grab.com/compressed_webp/items/IDITE2024022702104740866/detail/menueditor_item_f643cdac976644a3b689cdd80deb857e_1708999814365553180.webp',
    },
    {
      category: 'makanan',
      name: 'Lontong',
      image:
        'https://food-cms.grab.com/compressed_webp/items/IDITE2024022702093851230/detail/menueditor_item_3d80fd79e0e14e289047d757ca5581ff_1708999703661397461.webp',
    },

    // Minuman
    {
      category: 'minuman',
      name: 'Teh Botol',
      image:
        'https://food-cms.grab.com/compressed_webp/items/IDITE2024022702104740866/detail/menueditor_item_f643cdac976644a3b689cdd80deb857e_1708999814365553180.webp',
    },
    {
      category: 'minuman',
      name: 'Jus Jeruk',
      image:
        'https://food-cms.grab.com/compressed_webp/items/IDITE2024022702093851230/detail/menueditor_item_3d80fd79e0e14e289047d757ca5581ff_1708999703661397461.webp',
    },
    {
      category: 'minuman',
      name: 'Es Teh',
      image:
        'https://food-cms.grab.com/compressed_webp/items/IDITE2024022702104740866/detail/menueditor_item_f643cdac976644a3b689cdd80deb857e_1708999814365553180.webp',
    },

    // Menu Tambahan
    {
      category: 'menuTambahan',
      name: 'Tahu Tempe',
      image:
        'https://food-cms.grab.com/compressed_webp/items/IDITE2024022702093851230/detail/menueditor_item_3d80fd79e0e14e289047d757ca5581ff_1708999703661397461.webp',
    },
    {
      category: 'menuTambahan',
      name: 'Sate',
      image:
        'https://food-cms.grab.com/compressed_webp/items/IDITE2024022702104740866/detail/menueditor_item_f643cdac976644a3b689cdd80deb857e_1708999814365553180.webp',
    },
    {
      category: 'menuTambahan',
      name: 'Krupuk',
      image:
        'https://food-cms.grab.com/compressed_webp/items/IDITE2024022702093851230/detail/menueditor_item_3d80fd79e0e14e289047d757ca5581ff_1708999703661397461.webp',
    },
  ];

  // Variable to hold the filtered items based on the selected category
  filteredItems = this.items;

  // Function to set the category and filter items
  setCategory(category: string) {
    if (category === 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(
        (item) => item.category === category
      );
    }
  }
}
