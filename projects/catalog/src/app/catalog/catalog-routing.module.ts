import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourceResolverAuth } from '../source-resolver';
import { CatalogComponent } from './catalog.component';
import { SourceEditComponent } from './source-edit/source-edit.component';
import { SourceInclusionComponent } from './source-inclusion/source-inclusion.component';
import { SourceViewComponent } from './source-view/source-view.component';


const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
