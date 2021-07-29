
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationListComponent, OauthAuthenticationService } from 'toco-lib';
import { HomeComponent } from './home/home.component';
import { SourceResolver, SourceResolverAuth } from './source-resolver';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
  {
    path: 'sources',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule),
    canActivate: [OauthAuthenticationService]
  },
  {
    path: 'permissions',
    loadChildren: () => import('./permissions/permissions.module').then(m => m.PermissionsModule),
    canActivate: [OauthAuthenticationService]
  },
  {
    path: 'harvester',
    loadChildren: () => import('./harvester/harvester.module').then(m => m.HarvesterModule) ,
    canActivate: [OauthAuthenticationService]
  },{
    path: 'faq',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/faq.md', title: 'FAQ' },
  },
  {
    path: 'about',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/about.md', title: 'Sobre Nosotros' },
  },
  {
    path: 'help',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/help.md', title: 'Ayuda' },
  },
  {
    path: 'contact',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/contact.md', title: 'Contacto' },
  },
  {
    path: 'userprofile',
    component: UserProfileComponent,
    canActivate: [OauthAuthenticationService],
  },
  {
    path: 'notifications',
    component: NotificationListComponent,
    canActivate: [OauthAuthenticationService]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  // {
  //   path: 'inst-repo',
  //   loadChildren: () => import('./inst-repo/inst-repo.module').then(mod => mod.InstRepoModule),
  //   data: {
  //     preload: true  /* In orden to use a custom preloading strategy (`SelectiveModulesPreload`). */
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SourceResolver, SourceResolverAuth],
})
export class AppRoutingModule
{ }
