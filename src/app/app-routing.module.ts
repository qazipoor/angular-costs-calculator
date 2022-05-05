import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CostsResolver } from './resolvers/costs.resolver';
import { RatesResolver } from './resolvers/rates.resolver';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      costs: CostsResolver,
      rates: RatesResolver
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CostsResolver]
})
export class AppRoutingModule { }
