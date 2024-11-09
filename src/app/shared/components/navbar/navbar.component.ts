import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  // Referensi elemen yang ingin digulirkan
  @ViewChild('howToOrder') howToOrderRef!: ElementRef;
  @ViewChild('faqRef') faqRef!: ElementRef;
  @ViewChild('footerRef') footerRef!: ElementRef;
  @ViewChild('popularMenu') popularMenu!: ElementRef;
  @ViewChild('explore') exploreMenu!: ElementRef;

  // Fungsi ini dipanggil setelah komponen selesai dirender
  ngAfterViewInit() {
    // Debugging, cek apakah referensi ke elemen sudah benar
    console.log('How to Order Ref:', this.howToOrderRef);
    console.log('FAQ Ref:', this.faqRef);
    console.log('Footer Ref:', this.footerRef);
    console.log('Popular Menu Ref:', this.popularMenu);
    console.log('Explore Menu Ref:', this.exploreMenu);
  }

  // Fungsi untuk menggulir ke bagian 'How to Order'
  scrollToHowToOrder() {
    if (this.howToOrderRef) {
      this.howToOrderRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Fungsi untuk menggulir ke bagian 'FAQ'
  scrollToFAQ() {
    if (this.faqRef) {
      this.faqRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Fungsi untuk menggulir ke bagian 'Footer'
  scrollToFooter() {
    if (this.footerRef) {
      this.footerRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Fungsi untuk menggulir ke bagian 'Popular Menu'
  scrollToPopularMenu() {
    if (this.popularMenu) {
      this.popularMenu.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Fungsi untuk menggulir ke bagian 'Explore Menu'
  scrollToExploreMenu() {
    if (this.exploreMenu) {
      this.exploreMenu.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
