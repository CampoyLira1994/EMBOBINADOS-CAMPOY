import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortadaComponent } from './portada/portada.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {path: '',component:PortadaComponent},
  {path: 'nosotros',component:NosotrosComponent},
  {path: 'clientes',component:ClientesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
