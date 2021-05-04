import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortadaComponent } from './portada/portada.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {path: '',component:PortadaComponent},
  {path: 'nosotros',component:NosotrosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
