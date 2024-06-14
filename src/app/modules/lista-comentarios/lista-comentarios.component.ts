import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

interface Comentarios {
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

  comentario: Comentarios[] = [];
  comentariosCompartir: Comentarios[] = [];

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.fetchComentarios();
  }

  async eliminarComentario(comentario: Comentarios) {
    try {
      await this.firestore.collection('comentarios').doc(comentario.id).delete();
      this.comentario = this.comentario.filter(item => item.id !== comentario.id);  // Actualiza la lista localmente
      console.log(`Comentario con ID ${comentario.id} eliminado`);
    } catch (error) {
      console.error('Error eliminando el comentario: ', error);
    }
  }

  fetchComentarios() {
    this.firestore.collection<Comentarios>('comentarios').valueChanges({ idField: 'id' }).subscribe((comentarios) => {
      this.comentario = comentarios;
      this.comentariosCompartir = this.comentario.slice();
      console.log('Comentarios recuperados:', this.comentario);
    });
  }

}
