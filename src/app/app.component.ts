import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/img.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/img.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/img.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/img.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/img.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/img.jpg'
    }
  ]
}
