import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { MarkdownModule } from 'ngx-markdown';
import { CatalogAppModule } from 'projects/catalog/src/app/app.module';
import { DialogCatalogJournalInfoDialog } from 'projects/catalog/src/app/catalog/catalog.component';
import { MySourcesManagerPermissionDialog } from 'projects/catalog/src/app/mysources/manager/manager.component';
import { MySourcesOrganizationsPermissionDialog } from 'projects/catalog/src/app/mysources/organizations/organizations.component';
import { MySourcesTermsPermissionDialog } from 'projects/catalog/src/app/mysources/terms/terms.component';
import { SourceEditAddIndexComponent } from 'projects/catalog/src/app/source-edit/source-indexes/source-indexes.component';
import { SourceEditOrganizationSelectDialog, SourceEditOrganizationSelectTopDialog } from 'projects/catalog/src/app/source-edit/source-organizations/source-organizations.component';
import { SourceInclusionAcceptComponent } from 'projects/catalog/src/app/source-inclusion/source-inclusion.component';
import { SourceViewSaveDialog } from 'projects/catalog/src/app/source-view/source-view.component';
import { AngularMaterialModule, AuthenticationModule, CoreModule, Environment, HTTP_INTERCEPTOR_PROVIDERS, NotificationModule, OrganizationServiceNoAuth, OrganizationsModule, SharedModule, SourceService, SourceServiceNoAuth, TaxonomyService, TocoFormsModule, UserProfileService } from 'toco-lib';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRevistasmesComponent } from './home/home.component';

export function storageFactory() : OAuthStorage {
  return sessionStorage
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
    ReactiveFormsModule,
    // BrowserModule,
    AppRoutingModule,
    NotificationModule,
    TocoFormsModule,
    OrganizationsModule,
    CoreModule,
    SharedModule,
    AuthenticationModule,
    AngularMaterialModule,
    // TaxonomyModule,
    FlexLayoutModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    OAuthModule.forRoot(),
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
    { provide: Environment, useValue: environment },
    { provide: OAuthStorage, useFactory: storageFactory },
  ],
  bootstrap: [AppComponent]
})
export class RevistasmesAppModule { }
