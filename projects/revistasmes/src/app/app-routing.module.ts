/*
 *   Copyright (c) 2020 Universidad de Pinar del Río 'Hermanos Saíz Montes de Oca'
 *   All rights reserved.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationListComponent, OauthAuthenticationService } from 'toco-lib';
import { SourceResolver } from '../../../catalog/src/app/_services/source-resolver';
import { StaticPagesComponent } from '../../../catalog/src/app/static-pages/static-pages.component';
import { UserProfileComponent } from '../../../catalog/src/app/user-profile/user-profile.component';
import { HomeRevistasmesComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'sources',
    loadChildren: () => import('../../../catalog/src/app/catalog/catalog.module').then(m => m.CatalogModule),
    data: { topOrganizationPID: 'orgaid.223'},
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
    data: { src: 'assets/markdown/revistasmes/faq', title: 'FAQ' },
  },
  {
    path: 'about',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/revistasmes/about', title: 'Sobre Nosotros' },
  },
  {
    path: 'help',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/revistasmes/help', title: 'Ayuda' },
  },
  {
    path: 'contact',
    component: StaticPagesComponent,
    data: { src: 'assets/markdown/revistasmes/contact', title: 'Contacto' },
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
