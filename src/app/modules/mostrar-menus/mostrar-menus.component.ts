import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage'; // Import AngularFireStorage

interface NuevoMenu {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string; // Change the type from HTMLImageElement to string
}

@Component({
  selector: 'app-mostrar-menus',
  templateUrl: './mostrar-menus.component.html',
  styleUrls: ['./mostrar-menus.component.css']
})
export class MostrarMenusComponent implements OnInit {
  menus: NuevoMenu[] = [];
  menusCompartir: NuevoMenu[] = [];

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage // Add AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.fetchMenus();
  }

  fetchMenus() {
    this.firestore.collection<NuevoMenu>('menus').valueChanges().subscribe((menus) => {
      this.menus = menus;
      this.menusCompartir = menus.slice();
      console.log('Menús recuperados:', this.menus);
    });
  }

  handleFileInput(event: any, menu: NuevoMenu) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const dataURL = reader.result as string;
        menu.imagen = dataURL;
      };
    }
  }
}
