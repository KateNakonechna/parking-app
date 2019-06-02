import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GarageListComponent} from './components/garage-list/garage-list.component';
import {IndexComponent} from './components/index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule {
}
