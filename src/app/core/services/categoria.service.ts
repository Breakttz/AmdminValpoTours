import { Injectable,Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
    constructor(private db: AngularFirestore) {
    }

async addCategory(menu: any) {
  try {
    const id = this.db.createId();
    console.log(menu, id);

    return await this.db.doc('Menu/' + id).set(menu); // Guardar todos los campos del menú
  } catch (error) {
    console.log(error);
  }
}
}

