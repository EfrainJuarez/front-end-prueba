import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const routes: Routes = [
{path:'inicio', component: DashboardComponent},
{path: 'auth',
loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
