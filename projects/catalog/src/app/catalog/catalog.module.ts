import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CoreModule, OrganizationsModule, SharedModule, TocoFormsModule } from 'toco-lib';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent, DialogCatalogJournalInfoDialog } from './catalog.component';
import { FiltersComponent } from './filters/filters.component';
import { SourceClassificationsComponent } from './source-classifications/source-classifications.component';
import { SourceEditJournalComponent } from './source-edit/journal-edit/journal-edit.component';
import { SourceEditComponent } from './source-edit/source-edit.component';
import { SourceEditAddIndexComponent, SourceEditIndexesComponent } from './source-edit/source-indexes/source-indexes.component';
import { SourceInclusionAcceptComponent, SourceInclusionComponent } from './source-inclusion/source-inclusion.component';
import { SourceEditOrganizationsComponent, SourceEditOrganizationSelectDialog, SourceEditOrganizationSelectTopDialog } from './source-organizations/source-organizations.component';
import { SourceJournalViewInfoComponent, SourceJournalViewInfoFieldComponent } from './source-view/journal-view/info/journal-view-info.component';
import { SourceJournalViewComponent } from './source-view/journal-view/journal-view.component';
import { SourceJournalViewVersionFieldComponent } from './source-view/journal-view/version-field/journal-view-version-field.component';
import { SourceJournalViewVersionTermComponent } from './source-view/journal-view/version-term/journal-view-version-term.component';
import { SourceJournalViewVersionComponent } from './source-view/journal-view/version/journal-view-version.component';
import { SourceViewDefaultComponent } from './source-view/source-view-default/source-view-default.component';
import { SourceViewReadComponent } from './source-view/source-view-read/source-view-read.component';
import { SourceViewComponent, SourceViewSaveDialog } from './source-view/source-view.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    CatalogComponent,
    FiltersComponent,
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
    DialogCatalogJournalInfoDialog,
    SourceViewDefaultComponent,
    SourceClassificationsComponent
  ],
  entryComponents: [
    SourceEditAddIndexComponent,
    SourceEditOrganizationSelectTopDialog,
    SourceEditOrganizationSelectDialog,
    SourceInclusionAcceptComponent,
    SourceViewSaveDialog,
    DialogCatalogJournalInfoDialog
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule,
    CoreModule,
    TocoFormsModule,
    OrganizationsModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
  ]
})
export class CatalogModule { }
