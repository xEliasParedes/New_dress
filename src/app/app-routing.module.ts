import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './components/barra/barra.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  //PAGINA DE ARRANQUE
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  //PAGINA DE ANIMACION
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },

  //PAGINA LOGIN
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  //PAGINA DE REGISTRAR
  { 
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  //PAGINA DE RESTABLECER CONTRASEÑA
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  //PAGINAS HIJAS QUE USAN EL COMPONENTE DE BARRA
  {
  path: '',
  component: BarraComponent,//incorporacion del componente
  canActivate: [authGuard],
  children: [
    //PAGINA DE INICIO DONDE SALE RECOMENDACIONES
    {
      path: 'home',
      loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    },
    //PAGINA DE EXPLORACION DE ROPAS Y COPNJUNTOS
    {
      path: 'exploracion',
      loadChildren: () => import('./pages/exploracion/exploracion.module').then( m => m.ExploracionPageModule)
    },
    //PAGINA DEDICADA AL USUARIO
    {
      path: 'perfil',
      loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
    },
    //PAGINA DE ARCHIVOS( TABLEROS/ARMARIOS DE ROPA)
    {
      path: 'armario',
      loadChildren: () => import('./pages/armario/armario.module').then( m => m.ArmarioPageModule)
    },
    {
      path: 'carga',
      loadChildren: () => import('./pages/carga/carga.module').then( m => m.CargaPageModule)
    },
    
  ],
  },
  //PAGINA NOT FOUND / ERROR 404
  {
    path: '**',
    component: BarraComponent,
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
