import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuServiceService } from 'src/app/core/services/menu-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import imageCompression from 'browser-image-compression';


interface NuevoMenu {
  nombre: string,
  precio: string,
  descripcion: string,
  image:File
}

@Component({
  selector: 'app-addmenus',
  templateUrl: './addmenus.component.html',
  styleUrls: ['./addmenus.component.css']
})
export class AddmenusComponent {
  formulario: FormGroup;
  productsService: any;

  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuServiceService,
    private firestore: AngularFirestore
  ) 
  {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required] // Agregamos el campo imagen al formulario

    });
  }

  async onFileSelected(event: any) {
    let file = event.target.files[0];

    // Comprimir la imagen antes de subirla
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    };
    try {
      const compressedFile = await imageCompression(file, options);
      file = compressedFile as File;

      // Convertir a base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result;
        this.formulario.get('imagen')?.setValue(base64data);
      };
    } catch (error) {
      console.log(error);
    }
  }

  async agregarMenu() {
    if (this.formulario.valid) {
      const nuevoMenu: NuevoMenu = this.formulario.value;

      try {
        // Agregar el menú a Firestore utilizando AngularFirestore
        const id = this.firestore.createId();
        await this.firestore.collection('menus').doc(id).set({...nuevoMenu,id});
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