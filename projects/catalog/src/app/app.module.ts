// import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FiltersComponent } from './catalog/filters/filters.component';
import { MySourcesComponent } from './mysources/mysources.component';
import { MySourcesEditorComponent } from './mysources/editor/editor.component';
import { MySourcesManagerComponent, MySourcesManagerPermissionDialog } from './mysources/manager/manager.component';
import { MySourcesOrganizationsComponent, MySourcesOrganizationsPermissionDialog } from './mysources/organizations/organizations.component';
import { MySourcesTermsAdminComponent } from './mysources/terms-admin/terms-admin.component';
import { MySourcesTermsComponent, MySourcesTermsPermissionDialog } from './mysources/terms/terms.component';
import { SourceEditComponent } from './source-edit/source-edit.component';
import { SourceEditAddIndexComponent, SourceEditIndexesComponent } from './source-edit/source-indexes/source-indexes.component';
import { SourceEditOrganizationsComponent, SourceEditOrganizationSelectDialog, SourceEditOrganizationSelectTopDialog } from './source-edit/source-organizations/source-organizations.component';
import { SourceEditJournalComponent } from './source-edit/journal-edit/journal-edit.component';
import { SourceInclusionAcceptComponent, SourceInclusionComponent } from './source-inclusion/source-inclusion.component';
import { SourceViewComponent, SourceViewSaveDialog } from './source-view/source-view.component';
import { SourceViewReadComponent } from './source-view/source-view-read/source-view-read.component';
import { SourceJournalViewComponent } from './source-view/journal-view/journal-view.component';
import { SourceJournalViewVersionTermComponent } from './source-view/journal-view/version-term/journal-view-version-term.component';
import { SourceJournalViewVersionFieldComponent } from './source-view/journal-view/version-field/journal-view-version-field.component';
import { SourceJournalViewVersionComponent } from './source-view/journal-view/version/journal-view-version.component';
import { SourceJournalViewInfoComponent, SourceJournalViewInfoFieldComponent } from './source-view/journal-view/info/journal-view-info.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule, AuthenticationModule, AuthenticationService, CoreModule, EnvServiceProvider, HTTP_INTERCEPTOR_PROVIDERS, NotificationModule, OrganizationServiceNoAuth, OrganizationsModule, REQUEST_CACHE_DIFFERENT_TIME_WITH_MAP_PROVIDER, SharedModule, SourceService, SourceServiceNoAuth, TaxonomyModule, TaxonomyService, TocoFormsModule, UserProfileService } from 'toco-lib';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule } from 'ngx-markdown';
import { MySourcesSourcePermissionComponent } from './mysources/permission/source-permission/source-permission.component';
import { MySourcesOrganizationPermissionComponent } from './mysources/permission/organization-permission/organization-permission.component';
import { MySourcesTermPermissionComponent } from './mysources/permission/term-permission/term-permission.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    UserSearchComponent
  ],
  entryComponents: [
    MySourcesManagerPermissionDialog,
    MySourcesOrganizationsPermissionDialog,
    MySourcesTermsPermissionDialog,
    SourceEditAddIndexComponent,
    SourceEditOrganizationSelectTopDialog,
    SourceEditOrganizationSelectDialog,
    SourceInclusionAcceptComponent,
    SourceViewSaveDialog
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
    })
  ],
  providers: [
    EnvServiceProvider,
    SourceService,
    SourceServiceNoAuth,
    UserProfileService,
    TaxonomyService,
    OrganizationServiceNoAuth,
    HTTP_INTERCEPTOR_PROVIDERS,
    REQUEST_CACHE_DIFFERENT_TIME_WITH_MAP_PROVIDER,
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
