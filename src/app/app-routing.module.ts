import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProviderComponent} from './isp/container/provider/provider.component'
import { DetailProviderComponent } from './isp/components/detail-provider/detail-provider.component';

const routes: Routes = [
 
  
    {path:'detailProvider/:id',component:DetailProviderComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
