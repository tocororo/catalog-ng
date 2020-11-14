import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationService, NotificationListComponent } from 'toco-lib';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { MySourcesComponent } from './mysources/mysources.component';
import { SourceEditComponent } from './source-edit/source-edit.component';
import { SourceInclusionComponent } from './source-inclusion/source-inclusion.component';
import { SourceResolver, SourceResolverAuth } from './source-resolver';
import { SourceViewReadComponent } from './source-view/source-view-read/source-view-read.component';
import { SourceViewComponent } from './source-view/source-view.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{
    path: 'directory',
    children: [
      {
          path: ':uuid',
          component: SourceViewReadComponent,
          resolve: {
              record: SourceResolver
          }
      },
      {
          path: '',
          component: CatalogComponent,
      }
  ],
},
{
    path: 'faq',
    component: StaticPagesComponent,
    data: {src: 'assets/markdown/faq.md', title: 'FAQ'}
},
{
    path: 'about',
    component: StaticPagesComponent,
    data: {src: 'assets/markdown/about.md', title: 'Sobre Nosotros'}
},
{
    path: 'help',
    component: StaticPagesComponent,
    data: {src: 'assets/markdown/help.md', title: 'Ayuda'}
},
{
    path: 'contact',
    component: StaticPagesComponent,
    data: {src: 'assets/markdown/contact.md', title: 'Contacto'}
},
{
    path: 'userprofile',
    component: UserProfileComponent,
    canActivate: [AuthenticationService]
},
{
    path: 'sources',
    // loadChildren: () => import('@toco/tools/journal').then(mod => mod.JournalModule),
    children: [
        {
            path: 'new',
            children:[
                {
                    path: 'journal',
                    component: SourceInclusionComponent,
                }
            ]
        },
        {
            path: ':uuid/view',
            component: SourceViewComponent,
            resolve: {
                source: SourceResolverAuth
            }
        },
        {
            path: ':uuid/edit',
            component: SourceEditComponent,
            resolve: {
              source: SourceResolverAuth
            }
        },
        // {
        //     path: 'permissions',
        //     component: GrantPermissionsComponent,
        // },
        {
            path: '',
            component: MySourcesComponent,
        }
    ],
    canActivate: [AuthenticationService]
},
{
    path: 'notifications',
    component: NotificationListComponent,
    canActivate: [AuthenticationService]
},
{
    path: '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    SourceResolver,
    SourceResolverAuth
]
})
export class AppRoutingModule { }
