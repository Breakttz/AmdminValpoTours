import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SelectItem, TreeNode } from 'primeng/api';

interface NuevoMenu {
  id: string,
  nombre: string,
  categoria: string,
  direccion: string,
  urlmaps: string,
  atitud: string,
  localidad: string,
  longitud: string,
  provincia: string,
  urlimg: string
}

@Component({
  selector: 'app-editmenus',
  templateUrl: './editmenus.component.html',
  styleUrls: ['./editmenus.component.css']
})
export class EditmenusComponent implements OnInit {
onRowEditInit() {
throw new Error('Method not implemented.');
}
  menus: NuevoMenu[] = [];
  filteredMenus: NuevoMenu[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.fetchMenus();
  }

  fetchMenus() {
    this.firestore.collection<NuevoMenu>('places').valueChanges().subscribe((menus) => {
      this.menus = menus;
      this.filteredMenus = [...this.menus]; // Copiar los menus a filteredMenus
      console.log('Menús recuperados:', this.menus);
    });
  }

  onFilterChange(event: Event) {
    const searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredMenus = this.menus.filter(menu =>
      menu.nombre.toLowerCase().includes(searchText)
    );
  }

  async onRowEditSave(menu: NuevoMenu) {
    const menuId = menu.id;

    try {
      await this.firestore.collection('menus').doc(menuId).update(menu);
      console.log('Menú actualizado:', menu);
    } catch (error) {
      console.error('Error al actualizar el menú:', error);
    }
  }

  onRowEditCancel() {
    // Implementación según necesidades
  }

  async eliminarMenu(menu: NuevoMenu) {
    try {
      await this.firestore.collection('menus').doc(menu.id).delete();
      console.log('Menú eliminado:', menu);
    } catch (error) {
      console.error('Error al eliminar el menú:', error);
    }
  }

  onImageUpload(event: any, menu: NuevoMenu) {
    const file: File = event.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64String = reader.result as string;
      menu.urlimg = base64String; // Actualizamos la propiedad "urlimg" del objeto "menu" con la URL de la imagen
    };

    reader.readAsDataURL(file);
  }
}
