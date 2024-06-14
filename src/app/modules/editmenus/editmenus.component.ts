import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { SelectItem, TreeNode } from 'primeng/api';
import { AddmenusComponent } from '../addmenus/addmenus.component';

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
interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-editmenus',
  templateUrl: './editmenus.component.html',
  styleUrls: ['./editmenus.component.css']
})
export class EditmenusComponent {
  menus: NuevoMenu[] = [];
  files!: TreeNode[];
  statuses!: SelectItem[];

  cols!: Column[];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.fetchMenus();
  }
  fetchMenus() {
    this.firestore.collection<NuevoMenu>('places').valueChanges().subscribe((menus) => {
      this.cols = [
        { field: 'nombre', header: 'Nombre' },
        { field: 'precio', header: 'Precio' },
        { field: 'descripcion', header: 'Descripcion' }
      ];
      this.menus = menus;
      console.log('Menús recuperados:', this.menus);
    });
  }
  onRowEditInit() {
  }
  async onRowEditSave(itemsMenus: NuevoMenu) {
    const menuId = itemsMenus.id; // Supongamos que tienes un campo "id" en tu interfaz NuevoMenu

    try {
      await this.firestore.collection('menus').doc(menuId).update(itemsMenus);
      console.log('Menú actualizado:', itemsMenus);
    } catch (error) {
      console.error('Error al actualizar el menú:', error);
    }
  }

  onRowEditCancel() {
  }
  onImageUpload(event: any, menu: NuevoMenu) {
    console.log("hola mundo")
    const file: File = event.files[0];
    const reader = new FileReader();
  
    reader.onload = (e) => {
      const base64String = reader.result as string;
      menu.urlimg = base64String; // Actualizamos la propiedad "imagen" del objeto "menu" con la URL de la imagen
    };
  
    reader.readAsDataURL(file);
  }
  
  async eliminarMenu(itemsMenus:NuevoMenu){


    await this.firestore.collection('menus').doc(itemsMenus.id).delete();

  }
}
