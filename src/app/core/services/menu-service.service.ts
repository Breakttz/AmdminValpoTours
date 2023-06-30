import { Injectable, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  constructor(private db: AngularFirestore) {
  }

  async addMenus(menu: any) {
    try {
      const id = this.db.createId();
      console.log(menu, id);

      return await this.db.doc('Menu/' + id).set(menu); // Guardar todos los campos del menú
    } catch (error) {
      console.log(error);
    }
  }
}
