
// import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MarkdownModule } from 'ngx-markdown';

import { AngularMaterialModule, AuthenticationModule, CoreModule, Environment, 
  HTTP_INTERCEPTOR_PROVIDERS, NotificationModule, OrganizationServiceNoAuth, 
  OrganizationsModule, SearchService, SharedModule, SourceService, SourceServiceNoAuth, 
  TaxonomyService, TocoFormsModule, UserProfileService } from 'toco-lib';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent, DialogCatalogJournalInfoDialog } from './catalog/catalog.component';
import { FiltersComponent } from './catalog/filters/filters.component';
import { HomeComponent } from './home/home.component';
import { MySourcesEditorComponent } from './mysources/editor/editor.component';
import { MySourcesManagerComponent, MySourcesManagerPermissionDialog } from './mysources/manager/manager.component';
import { MySourcesComponent } from './mysources/mysources.component';
import { MySourcesOrganizationsComponent, MySourcesOrganizationsPermissionDialog } from './mysources/organizations/organizations.component';
import { MySourcesOrganizationPermissionComponent } from './mysources/permission/organization-permission/organization-permission.component';
import { MySourcesSourcePermissionComponent } from './mysources/permission/source-permission/source-permission.component';
import { MySourcesTermPermissionComponent } from './mysources/permission/term-permission/term-permission.component';
import { MySourcesTermsAdminComponent } from './mysources/terms-admin/terms-admin.component';
import { MySourcesTermsComponent, MySourcesTermsPermissionDialog } from './mysources/terms/terms.component';
import { SourceEditJournalComponent } from './source-edit/journal-edit/journal-edit.component';
import { SourceEditComponent } from './source-edit/source-edit.component';
import { SourceEditAddIndexComponent, SourceEditIndexesComponent } from './source-edit/source-indexes/source-indexes.component';
import { SourceEditOrganizationsComponent, SourceEditOrganizationSelectDialog, SourceEditOrganizationSelectTopDialog } from './source-edit/source-organizations/source-organizations.component';
import { SourceInclusionAcceptComponent, SourceInclusionComponent } from './source-inclusion/source-inclusion.component';
import { SourceJournalViewInfoComponent, SourceJournalViewInfoFieldComponent } from './source-view/journal-view/info/journal-view-info.component';
import { SourceJournalViewComponent } from './source-view/journal-view/journal-view.component';
import { SourceJournalViewVersionFieldComponent } from './source-view/journal-view/version-field/journal-view-version-field.component';
import { SourceJournalViewVersionTermComponent } from './source-view/journal-view/version-term/journal-view-version-term.component';
import { SourceJournalViewVersionComponent } from './source-view/journal-view/version/journal-view-version.component';
import { SourceViewReadComponent } from './source-view/source-view-read/source-view-read.component';
import { SourceViewComponent, SourceViewSaveDialog } from './source-view/source-view.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { InstRepoViewComponent } from './inst-repo/view/inst-repo-view.component';
import { InstRepoEditComponent } from './inst-repo/edit/inst-repo-edit.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    FiltersComponent,
    HomeComponent,
    MySourcesComponent,
    MySourcesEditorComponent,
    MySourcesManagerComponent,
    MySourcesManagerPermissionDialog,
    MySourcesOrganizationsComponent,
    MySourcesOrganizationsPermissionDialog,
    MySourcesTermsAdminComponent,
    MySourcesTermsComponent,
    MySourcesTermsPermissionDialog,
    MySourcesSourcePermissionComponent,
    MySourcesOrganizationPermissionComponent,
    MySourcesTermPermissionComponent,
    SourceEditComponent,
    SourceEditIndexesComponent,
    SourceEditAddIndexComponent,
    SourceEditOrganizationsComponent,
    SourceEditOrganizationSelectTopDialog,
    SourceEditOrganizationSelectDialog,
    SourceEditJournalComponent,
    SourceInclusionComponent,
    SourceInclusionAcceptComponent,
    SourceViewComponent,
    SourceViewSaveDialog,
    SourceViewReadComponent,
    SourceJournalViewInfoFieldComponent,
    SourceJournalViewComponent,
    SourceJournalViewVersionTermComponent,
    SourceJournalViewVersionFieldComponent,
    SourceJournalViewVersionComponent,
    SourceJournalViewInfoComponent,
    StaticPagesComponent,
    UserProfileComponent,
    UserSearchComponent,
    DialogCatalogJournalInfoDialog,
    InstRepoViewComponent,
    InstRepoEditComponent
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
    })
  ],
  providers: [
    SearchService,
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
export class CatalogAppModule { }
