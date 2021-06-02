
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { CoreModule, StaticsModule, Environment } from 'toco-lib';

import { environment } from '../../environments/environment';
import { InstRepoRoutingModule } from './inst-repo-routing.module';

import { InstRepoViewComponent } from './view/inst-repo-view.component';
import { InstRepoEditComponent } from './edit/inst-repo-edit.component';

@NgModule({
	declarations: [
        InstRepoViewComponent,
        InstRepoEditComponent
	],

	imports: [
		CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FlexLayoutModule,

        MatTooltipModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule,

        CoreModule,
        StaticsModule,
		InstRepoRoutingModule
	],

    providers: [
        { provide: Environment, useValue: environment }
    ],
})
export class InstRepoModule
{ }
