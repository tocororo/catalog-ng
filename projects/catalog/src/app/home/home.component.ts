/*
 *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
 *   All rights reserved.
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { Environment, Hit, Journal, JournalVersion, MessageHandler, MetadataService, Organization, OrganizationServiceNoAuth, ResponseStatus, SourceService, SourceServiceNoAuth, SourceTypes, StatusCode } from 'toco-lib';

@Component({
    selector: 'catalog-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



    constructor(
      private metadata: MetadataService,
      public transServ: TranslateService) {
    }

    ngOnInit() {
      this.metadata.setStandardMeta('Catalog Sceiba', 'Sceiba Catalog')
    }

}
