import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent, DialogCatalogJournalInfoDialog } from './catalog.component';
import { FiltersComponent } from './filters/filters.component';
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
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
