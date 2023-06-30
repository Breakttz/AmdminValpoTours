import { Component } from '@angular/core';
interface Image {
  itemImageSrc: string;
}
@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {
  images: Image[] = [
    { itemImageSrc: 'assets/imagenes/portada.jpg' },
    { itemImageSrc: 'assets/imagenes/portada1.jpg' },
    { itemImageSrc: 'assets/imagenes/portada3.jpg' }  
  ];


    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    handleValueChange(event: any) {
      this.images = event;
    }

}
