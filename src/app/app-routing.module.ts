import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmenusComponent } from './modules/addmenus/addmenus.component';
import { MenuPrincipalComponent } from './modules/menu-principal/menu-principal.component';
import { EditmenusComponent } from './modules/editmenus/editmenus.component';
import { MostrarMenusComponent } from './modules/mostrar-menus/mostrar-menus.component';
const routes: Routes = [
  { path: 'add-component', component: AddmenusComponent },
  { path: '', component: MenuPrincipalComponent },
  { path: 'mostrarmenu-component', component: MostrarMenusComponent },
  { path: 'editmenu-component', component: EditmenusComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
