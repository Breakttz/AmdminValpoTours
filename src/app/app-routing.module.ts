import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmenusComponent } from './modules/addmenus/addmenus.component';
import { MenuPrincipalComponent } from './modules/menu-principal/menu-principal.component';
import { EditmenusComponent } from './modules/editmenus/editmenus.component';
import { MostrarMenusComponent } from './modules/mostrar-menus/mostrar-menus.component';
import { CategoriaComponent } from './modules/editcategory/categoria/categoria.component';
import { ListaCategoriasComponent } from './modules/lista-categorias/lista-categorias.component';
import { ListaComentariosComponent } from './modules/lista-comentarios/lista-comentarios.component';
const routes: Routes = [
  { path: 'add-component', component: AddmenusComponent },
  { path: '', component: MenuPrincipalComponent },
  { path: 'menu-inicio-component', component: MenuPrincipalComponent },
  { path: 'mostrarmenu-component', component: MostrarMenusComponent },
  { path: 'editmenu-component', component: EditmenusComponent },
  { path: 'categoria-component', component: CategoriaComponent },
  { path: 'lista-categoria-component', component: ListaCategoriasComponent },
  { path: 'lista-comentario-component', component: ListaComentariosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
