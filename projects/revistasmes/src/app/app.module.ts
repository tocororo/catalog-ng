
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule } from 'ngx-markdown';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NotificationModule, TocoFormsModule, OrganizationsModule,
  CoreModule, SharedModule, AuthenticationModule, AngularMaterialModule,
  SourceService, SourceServiceNoAuth, UserProfileService, TaxonomyService,
  OrganizationServiceNoAuth, HTTP_INTERCEPTOR_PROVIDERS, Environment } from 'toco-lib';

import { AppComponent } from './app.component';
import { HomeRevistasmesComponent } from './home/home.component';
import { MySourcesManagerPermissionDialog } from 'projects/catalog/src/app/mysources/manager/manager.component';
import { MySourcesOrganizationsPermissionDialog } from 'projects/catalog/src/app/mysources/organizations/organizations.component';
import { MySourcesTermsPermissionDialog } from 'projects/catalog/src/app/mysources/terms/terms.component';
import { SourceEditAddIndexComponent } from 'projects/catalog/src/app/source-edit/source-indexes/source-indexes.component';
import { SourceEditOrganizationSelectTopDialog, SourceEditOrganizationSelectDialog } from 'projects/catalog/src/app/source-edit/source-organizations/source-organizations.component';
import { SourceInclusionAcceptComponent } from 'projects/catalog/src/app/source-inclusion/source-inclusion.component';
import { SourceViewSaveDialog } from 'projects/catalog/src/app/source-view/source-view.component';
import { DialogCatalogJournalInfoDialog } from 'projects/catalog/src/app/catalog/catalog.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogAppModule } from 'projects/catalog/src/app/app.module';
import { environment } from '../environments/environment';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeRevistasmesComponent
  ],  
  entryComponents: [
    MySourcesManagerPermissionDialog,
    MySourcesOrganizationsPermissionDialog,
    MySourcesTermsPermissionDialog,
    SourceEditAddIndexComponent,
    SourceEditOrganizationSelectTopDialog,
    SourceEditOrganizationSelectDialog,
    SourceInclusionAcceptComponent,
    SourceViewSaveDialog,
    DialogCatalogJournalInfoDialog
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
