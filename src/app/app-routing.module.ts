import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './components/barra/barra.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },

  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  { 
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
  path: '',
  component: BarraComponent,
  children: [
    {
      path: 'home',
      loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    },
    
    {
      path: 'exploracion',
      loadChildren: () => import('./pages/exploracion/exploracion.module').then( m => m.ExploracionPageModule)
    },
    {
      path: 'perfil',
      loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    {
      path: 'armario',
      loadChildren: () => import('./pages/armario/armario.module').then( m => m.ArmarioPageModule)
    },
    
  ],}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
