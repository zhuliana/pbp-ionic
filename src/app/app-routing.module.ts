import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'gedung',
    loadChildren: () => import('./pages/gedung/gedung.module').then( m => m.GedungPageModule)
  },
  {
    path: 'ruangan',
    loadChildren: () => import('./pages/ruangan/ruangan.module').then( m => m.RuanganPageModule)
  },  {
    path: 'add-gedung',
    loadChildren: () => import('./pages/add-gedung/add-gedung.module').then( m => m.AddGedungPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
