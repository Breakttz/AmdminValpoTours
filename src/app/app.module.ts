import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './modules/menu-principal/menu-principal.component';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { AddmenusComponent } from './modules/addmenus/addmenus.component';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule,FormGroup, FormControl} from '@angular/forms'
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MostrarMenusComponent } from './modules/mostrar-menus/mostrar-menus.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { TreeTableModule } from 'primeng/treetable';
import { EditmenusComponent } from './modules/editmenus/editmenus.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CategoriaComponent } from './modules/editcategory/categoria/categoria.component';
import { ListaCategoriasComponent } from './modules/lista-categorias/lista-categorias.component';
import { ListaComentariosComponent } from './modules/lista-comentarios/lista-comentarios.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    AddmenusComponent,
    MostrarMenusComponent,
    EditmenusComponent,
    CategoriaComponent,
    ListaCategoriasComponent,
    ListaComentariosComponent
  ],
  imports: [
    FileUploadModule,
    TableModule,
    TreeTableModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    GalleriaModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    CardModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
