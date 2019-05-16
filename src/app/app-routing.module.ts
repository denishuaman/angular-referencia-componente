import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VarRefPlantillaComponent } from './var-ref-plantilla/var-ref-plantilla.component';
import { PadreViewChildComponent } from './padre-view-child/padre-view-child.component';

const routes: Routes = [
  { path: 'var-ref-plantilla', component: VarRefPlantillaComponent },
  { path: 'padre-view-child', component: PadreViewChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
