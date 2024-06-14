import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface Comentario {
  id: string;
  idLugar: string;
  comentario: string;
  nombreUsuario: string;
  timestamp: string;
}

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {

  comentarios: Comentario[] = [];
  filteredComentarios: Comentario[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.fetchComentarios();
  }

  async eliminarComentario(comentario: Comentario) {
    try {
      await this.firestore.collection('comentarios').doc(comentario.id).delete();
      this.comentarios = this.comentarios.filter(item => item.id !== comentario.id);  // Actualiza la lista localmente
      this.filteredComentarios = this.filteredComentarios.filter(item => item.id !== comentario.id);  // Actualiza la lista filtrada
      console.log(`Comentario con ID ${comentario.id} eliminado`);
    } catch (error) {
      console.error('Error eliminando el comentario: ', error);
    }
  }

  fetchComentarios() {
    this.firestore.collection<Comentario>('comentarios').valueChanges({ idField: 'id' }).subscribe((comentarios) => {
      this.comentarios = comentarios;
      this.filteredComentarios = [...this.comentarios];  // Copia los comentarios a filteredComentarios
      console.log('Comentarios recuperados:', this.comentarios);
    });
  }

  onFilterChange(event: Event) {
    const searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredComentarios = this.comentarios.filter(comentario =>
      comentario.nombreUsuario.toLowerCase().includes(searchText) || comentario.comentario.toLowerCase().includes(searchText)
    );
  }

}
