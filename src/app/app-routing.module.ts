import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path : 'portero', loadChildren:() => import('./portero-modulo/portero-modulo.module').
 then(m=> m.PorteroModuloModule)},
  {path: '**', redirectTo: 'portero', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
