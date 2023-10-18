
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MarkdownModule } from 'ngx-markdown';
import { CatalogAppModule } from 'projects/catalog/src/app/app.module';
import { DialogCatalogJournalInfoDialog } from 'projects/catalog/src/app/catalog/catalog.component';
import { CatalogModule } from 'projects/catalog/src/app/catalog/catalog.module';
import { SourceEditAddIndexComponent } from 'projects/catalog/src/app/catalog/source-edit/source-indexes/source-indexes.component';
import { SourceInclusionAcceptComponent } from 'projects/catalog/src/app/catalog/source-inclusion/source-inclusion.component';
import { SourceEditOrganizationSelectDialog, SourceEditOrganizationSelectTopDialog } from 'projects/catalog/src/app/catalog/source-organizations/source-organizations.component';
import { SourceViewSaveDialog } from 'projects/catalog/src/app/catalog/source-view/source-view.component';
import { MySourcesManagerPermissionDialog } from 'projects/catalog/src/app/permissions/manager/manager.component';
import { MySourcesOrganizationsPermissionDialog } from 'projects/catalog/src/app/permissions/organizations/organizations.component';
import { PermissionsModule } from 'projects/catalog/src/app/permissions/permissions.module';
import { MySourcesTermsPermissionDialog } from 'projects/catalog/src/app/permissions/terms/terms.component';
import { AngularMaterialModule, AuthenticationModule, CoreModule, Environment, HTTP_INTERCEPTOR_PROVIDERS, NotificationModule, OrganizationServiceNoAuth, OrganizationsModule, SharedModule, SourceService, SourceServiceNoAuth, TaxonomyService, TocoFormsModule, UserProfileService } from 'toco-lib';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRevistasmesComponent } from './home/home.component';




export function createTranslateLoader(http: HttpClient): TranslateHttpLoader
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeRevistasmesComponent
    ],
    imports: [
        BrowserAnimationsModule,
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        ReactiveFormsModule,
        // BrowserModule,
        AppRoutingModule,
        NotificationModule,
        TocoFormsModule,
        OrganizationsModule,
        CoreModule,
        AuthenticationModule,
        AngularMaterialModule,
        // TaxonomyModule,
        FlexLayoutModule,
        MarkdownModule.forRoot({
            loader: HttpClient
        }),
        CatalogModule,
        PermissionsModule,
        CatalogAppModule
    ],
    providers: [
        SourceService,
        SourceServiceNoAuth,
        UserProfileService,
        TaxonomyService,
        OrganizationServiceNoAuth,
        HTTP_INTERCEPTOR_PROVIDERS,
        // REQUEST_CACHE_DIFFERENT_TIME_WITH_MAP_PROVIDER,
        // { provide: HTTP_INTERCEPTORS, useClass: OauthAuthenticationService, multi: true },
        { provide: Environment, useValue: environment }
    ],
    bootstrap: [AppComponent]
})
export class RevistasmesAppModule { }
