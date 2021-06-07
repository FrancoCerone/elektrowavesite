import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public carouselOptions: NguCarouselConfig;
  public testimonials = [{
  	songtitle : 'DANCE WITH SHERIFF',
  	songlink: 'https://soundcloud.com/elektrowave/sets/sheriff-is-back-in-town-album',
    photo: 'assets/images/primate.png',
    text: `Primate nasce nella Valdelsa anni 90’.
            Cresciuto con Marley in cuffia, ha iniziato a sperimentare con la voce ascoltando i big del roots reggae.
            Il suo stile è roots, primitivo, richiama i ritmi e i bassi dei ghetti di Kingstone. Più una scimmia sale in alto, più mostra la sua coda.`
            ,
    title: 'Primate',
    subtitle: 'Singer'
  }, {
	songtitle : 'TIME FOR YOU',
  	songlink: 'https://soundcloud.com/elektrowave/1-time-for-you',
   	link: 'https://www.instagram.com/giulia_gal_l/?hl=it',
    logo: 'assets/images/mock-logo-2.png',
    photo: 'assets/images/giulia.jpg',
    text: `Singer, Composer and Much More
			instagram: giulia_gal_l
			#giuliagallianimagcollective
			#GAL`,
    title: 'Giulia Galliani',
    subtitle: 'Singer, Composer'
  }, {
  	songtitle : 'EVEREST',
  	songlink: 'https://soundcloud.com/elektrowave/4-everest',
  	link: 'https://www.instagram.com/lemarinamusic/?hl=it',
    logo: 'assets/images/mock-logo-3.png',
    photo: 'assets/images/marina.PNG',
    text: `Triphop/Future beats music creator __Aesthete___
			Debut ep LIBERA`,
    title: 'Le Marina',
    subtitle: 'Singer, Composer'
  },
  {
  	songtitle : 'NATURAL POWER',
  	songlink: 'https://soundcloud.com/elektrowave/5-natural-power',
  	link: 'https://www.instagram.com/cheap_princess/?hl=it',
    logo: 'assets/images/mock-logo-1.png',
    photo: 'assets/images/silvia.PNG',
    text: `Singer, Composer and Much More`,
    title: 'Pejmej',
    subtitle: 'Singer'
  },
    {
  	songtitle : '',
  	songlink: '',
  	link: 'https://www.wildelsa.com/',
    logo: 'assets/images/mock-logo-3.png',
    photo: 'assets/images/wildelsa.PNG',
    text: `Party / Label / Management / Booking / Press / Recording Studio / Audio-Video Productions`,
    title: 'Wild Elsa',
    subtitle: 'Party / Label'
	}	
  ]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: {timing: 4000},
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
