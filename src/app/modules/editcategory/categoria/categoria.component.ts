import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
interface newCategory {
  categoria: string,

}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  formulario: any;
  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore
  ) {
    this.formulario = this.formBuilder.group({
      categoria: ['', Validators.required],
    });
  }
  async agregarCategoria() {
    if (this.formulario.valid) {
      const nuevoMenu: newCategory = this.formulario.value;

      try {
        // Agregar el menú a Firestore utilizando AngularFirestore
        const id = this.firestore.createId();
        await this.firestore.collection('categorias').doc(id).set({...nuevoMenu,id});
        console.log('Menú agregado:', nuevoMenu);

        // Luego puedes reiniciar el formulario si lo deseas
        this.formulario.reset();
      } catch (error) {
        console.error('Error al agregar el menú:', error);
      }
    } else {
      console.log('Formulario inválido');
    }
  }
}
