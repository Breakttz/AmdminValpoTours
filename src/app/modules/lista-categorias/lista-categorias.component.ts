import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface Categorias {
  id: string;
  categoria: string;
}

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias: Categorias[] = [];
  filteredCategorias: Categorias[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.fetchCategorias();
  }

  async eliminarCategoria(categoria: Categorias) {
    try {
      await this.firestore.collection('categorias').doc(categoria.id).delete();
      this.categorias = this.categorias.filter(item => item.id !== categoria.id);  // Actualiza la lista localmente
      this.filteredCategorias = this.filteredCategorias.filter(item => item.id !== categoria.id);  // Actualiza la lista filtrada
      console.log('Categoría eliminada:', categoria);
    } catch (error) {
      console.error('Error al eliminar categoría:', error);
    }
  }

  fetchCategorias() {
    this.firestore.collection<Categorias>('categorias').valueChanges().subscribe((categorias) => {
      this.categorias = categorias;
      this.filteredCategorias = [...this.categorias];  // Copia las categorías a filteredCategorias
      console.log('Categorías recuperadas:', this.categorias);
    });
  }

  onFilterChange(event: Event) {
    const searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCategorias = this.categorias.filter(categoria =>
      categoria.categoria.toLowerCase().includes(searchText)
    );
  }

}
