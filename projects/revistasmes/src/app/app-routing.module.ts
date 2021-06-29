/*
 *   Copyright (c) 2020 Universidad de Pinar del Río 'Hermanos Saíz Montes de Oca'
 *   All rights reserved.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OauthAuthenticationService, NotificationListComponent } from 'toco-lib';
import { SourceViewReadComponent } from 'projects/catalog/src/app/source-view/source-view-read/source-view-read.component';
import { SourceResolver, SourceResolverAuth } from 'projects/catalog/src/app/source-resolver';
import { StaticPagesComponent } from 'projects/catalog/src/app/static-pages/static-pages.component';
import { UserProfileComponent } from 'projects/catalog/src/app/user-profile/user-profile.component';
import { SourceInclusionComponent } from 'projects/catalog/src/app/source-inclusion/source-inclusion.component';
import { SourceViewComponent } from 'projects/catalog/src/app/source-view/source-view.component';
import { SourceEditComponent } from 'projects/catalog/src/app/source-edit/source-edit.component';
import { MySourcesComponent } from 'projects/catalog/src/app/mysources/mysources.component';
import { CatalogComponent } from 'projects/catalog/src/app/catalog/catalog.component';
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
          source: SourceResolverAuth,
        },
      },
      {
        path: ':uuid/edit',
        component: SourceEditComponent,
        resolve: {
          source: SourceResolverAuth,
        },
      },
      // {
      //     path: 'permissions',
      //     component: GrantPermissionsComponent,
      // },
      {
        path: '',
        component: MySourcesComponent,
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
  providers: [SourceResolver, SourceResolverAuth],
})
export class AppRoutingModule {}
