import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/parking',
    pathMatch: 'full'
  },
  {
    path: 'parking',
    loadChildren: './modules/parking/parking.module#ParkingModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
