/*
 *   Copyright (c) 2020 Universidad de Pinar del Río 'Hermanos Saíz Montes de Oca'
 *   All rights reserved.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from 'projects/catalog/src/app/catalog/catalog.component';
import { SourceEditComponent } from 'projects/catalog/src/app/catalog/source-edit/source-edit.component';
import { SourceInclusionComponent } from 'projects/catalog/src/app/catalog/source-inclusion/source-inclusion.component';
import { SourceViewReadComponent } from 'projects/catalog/src/app/catalog/source-view/source-view-read/source-view-read.component';
import { SourceViewComponent } from 'projects/catalog/src/app/catalog/source-view/source-view.component';
import { PermissionsComponent } from 'projects/catalog/src/app/permissions/permissions.component';
import { SourceResolver } from 'projects/catalog/src/app/source-resolver';
import { StaticPagesComponent } from 'projects/catalog/src/app/static-pages/static-pages.component';
import { UserProfileComponent } from 'projects/catalog/src/app/user-profile/user-profile.component';
import { NotificationListComponent, OauthAuthenticationService } from 'toco-lib';
import { HomeRevistasmesComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'directory',
    children: [
      {
        path: ':uuid',
        component: SourceViewReadComponent,
        resolve: {
          record: SourceResolver,
        },
      },
      {
        path: '',
        component: CatalogComponent,
      },
    ],
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
    path: 'sources',
    // loadChildren: () => import('@toco/tools/journal').then(mod => mod.JournalModule),
    children: [
      {
        path: 'new',
        children: [
          {
            path: 'journal',
            component: SourceInclusionComponent,
          },
        ],
      },
      {
        path: ':uuid/view',
        component: SourceViewComponent,
        resolve: {
          source: SourceResolver,
        },
      },
      {
        path: ':uuid/edit',
        component: SourceEditComponent,
        resolve: {
          source: SourceResolver,
        },
      },
      // {
      //     path: 'permissions',
      //     component: GrantPermissionsComponent,
      // },
      {
        path: '',
        component: PermissionsComponent,
      },
    ],
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
