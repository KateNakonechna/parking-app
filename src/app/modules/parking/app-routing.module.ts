import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GarageListComponent} from './components/garage-list/garage-list.component';


const routes: Routes = [
  {
    path: '',
    component: GarageListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule {
}
