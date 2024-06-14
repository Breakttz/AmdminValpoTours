import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

interface Categorias {
  id:string
  categoria: string,
}
@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categoria: Categorias[] = [];
  categoriaCompartir: Categorias[] = [];

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage // Add AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.fetchMenus();
  }
 
  async eliminarCategoria(categoria: Categorias) {
    await this.firestore.collection('categorias').doc(categoria.id).delete();
    this.categoria = this.categoria.filter(item => item.id !== categoria.id);  // Actualiza la lista localmente
  }
  fetchMenus() {
    this.firestore.collection<Categorias>('categorias').valueChanges().subscribe((categoria) => {
      this.categoria = categoria;
      this.categoriaCompartir = this.categoria.slice();
      console.log('Menús recuperados:', this.categoria);
    });
  }

}
