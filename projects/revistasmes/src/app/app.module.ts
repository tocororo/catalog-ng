import { NgModule } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NotificationModule, TocoFormsModule, OrganizationsModule, CoreModule, SharedModule, AuthenticationModule, AngularMaterialModule, SourceService, SourceServiceNoAuth, UserProfileService, TaxonomyService, OrganizationServiceNoAuth, HTTP_INTERCEPTOR_PROVIDERS, Environment } from 'toco-lib';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { CatalogAppModule } from 'projects/catalog/src/app/app.module';
import { environment } from '../environments/environment';

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
