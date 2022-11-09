/*
 *   Copyright (c) 2020 Universidad de Pinar del Río 'Hermanos Saíz Montes de Oca'
 *   All rights reserved.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourceResolver } from 'projects/catalog/src/app/source-resolver';
import { StaticPagesComponent } from 'projects/catalog/src/app/static-pages/static-pages.component';
import { UserProfileComponent } from 'projects/catalog/src/app/user-profile/user-profile.component';
import { NotificationListComponent, OauthAuthenticationService } from 'toco-lib';
import { HomeRevistasmesComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'sources',
    loadChildren: () => import('../../../catalog/src/app/catalog/catalog.module').then(m => m.CatalogModule),
    // canActivate: [OauthAuthenticationService]
  },
  {
    path: 'permissions',
    loadChildren: () => import('../../../catalog/src/app/permissions/permissions.module').then(m => m.PermissionsModule),
    canActivate: [OauthAuthenticationService]
  },
  {
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
    canActivate: [OauthAuthenticationService],
  },
  {
    path: '',
    component: HomeRevistasmesComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SourceResolver],
})
export class AppRoutingModule {}
