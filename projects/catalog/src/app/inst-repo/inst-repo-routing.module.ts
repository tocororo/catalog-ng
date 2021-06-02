
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstRepoViewComponent } from './view/inst-repo-view.component';
import { InstRepoEditComponent } from './edit/inst-repo-edit.component';
import { InstRepoResolverService } from './inst-repo-resolver.service';

const instRepoRoutes: Routes = [
    {
        path: ':uuid/view',
        component: InstRepoViewComponent,
        resolve: {
            /**
             * This resolver is used on all views. In the case of viewing view, 
             * it needs to resolve an object from the backend. 
             */
            'instRepo': InstRepoResolverService
        }
    },
    {
        path: 'add',
        component: InstRepoEditComponent,
        resolve: {
            /**
             * This resolver is used on all views. In the case of adding view, it needs to resolve 
             * an object with all its values set to empty. 
             */
            'instRepo': InstRepoResolverService
        }
    },
    {
        path: ':uuid/edit',
        component: InstRepoEditComponent,
        resolve: {
            /**
             * This resolver is used on all views. In the case of editing view, 
             * it needs to resolve an object from the backend. 
             */
            'instRepo': InstRepoResolverService
        }
    }
];

@NgModule({
	imports: [
		RouterModule.forChild(instRepoRoutes)
	],

	exports: [RouterModule]
})
export class InstRepoRoutingModule
{ }
