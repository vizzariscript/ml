import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  // {path:'', component: AppComponent, pathMatch:'full'},
  {path:'detalle', component: DetalleComponent},
  {path:'lista', component: ListaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
