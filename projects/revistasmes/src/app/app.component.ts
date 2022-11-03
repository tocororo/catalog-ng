/*
 *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
 *   All rights reserved.
 */

import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { Subscription } from 'rxjs';
import { Environment, OauthAuthenticationService, OauthInfo, UserProfile } from 'toco-lib';


@Component({
    selector: 'revistasmes-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public oauthInfo: OauthInfo = {
    serverHost: this.environment.sceibaHost,
    loginUrl: this.environment.sceibaHost + 'oauth/authorize',
    tokenEndpoint: this.environment.sceibaHost + 'oauth/token',
    userInfoEndpoint: this.environment.sceibaApi + 'me',
    appHost: this.environment.appHost,
    appName: this.environment.appName,
    oauthRedirectUri: this.environment.oauthRedirectUri,
    oauthClientId: this.environment.oauthClientId,
    oauthScope: this.environment.oauthScope,
  }

    public title = 'Registro de Revistas Científicas del MES';

    public isOnline: boolean;

    public islogged: boolean;

    userProfile: UserProfile;
    loading = false;
    private authenticateSuscription: Subscription = null;

    public footerSites: Array< { name: string, url: string, useRouterLink: boolean } >;

    public footerInformation: Array< { name: string, url: string, useRouterLink: boolean } >;

    // public footerImage: string


    constructor(
        private environment: Environment,
        private oauthStorage: OAuthStorage,
        private oauthService: OAuthService,
        private authenticateService: OauthAuthenticationService,
        private router: Router) {
        this.isOnline = true; //navigator.onLine;
        this.router.events.subscribe(
            (event: RouterEvent) => {
                if (event instanceof NavigationStart) {
                    this.loading = true;
                  }

                  if (event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError) {
                    this.loading = false;
                  }
              },
              (error: any) => {

              },
              () => {

              }
        );
    }
    ngOnInit(): void {
        let request = JSON.parse(this.oauthStorage.getItem('user'));
        console.log('request',request);

        if (request){
          this.userProfile = request.data.userprofile;
        }

        console.log(this.userProfile)
          this.authenticateSuscription = this.authenticateService.authenticationSubjectObservable.subscribe(
            (request) => {
              if (request != null) {
                console.log('request',request);
                this.userProfile = request.data.userprofile;
                // if (this.oauthStorage.getItem('access_token')) {
                //   this.user = this.oauthStorage.getItem('email');
                // }
              } else {
                this.logoff();
              }
            },
            (error: any) => {
              this.userProfile = null;
            },
            () => {
            }
          );
        this.footerInformation =  Array();
        this.footerSites =  Array();

        this.footerSites.push({ name: "MES", url: "https://www.mes.gob.cu", useRouterLink: false});
        // this.footerSites.push({ name: "Sceiba", url: "https://sceiba-lab.upr.edu.cu", useRouterLink: false});
        // this.footerSites.push({ name: "Dirección Nacional de Publicaciones Seriadas", url: "http://www.seriadascubanas.cult.cu/http://www.seriadascubanas.cult.cu/", useRouterLink:false});
        // this.footerSites.push({ name: "Red Ciencia", url: "http://www.redciencia.cu/", useRouterLink: false});

        // this.footerInformation.push({ name: "Términos de uso", url: "https://sceiba-lab.upr.edu.cu/page/politicas", useRouterLink: false});
        // this.footerInformation.push({ name: "Privacidad", url: "https://sceiba-lab.upr.edu.cu/page/politicas", useRouterLink: false});
        this.footerInformation.push({ name: "Contacto", url: "/contact", useRouterLink: true});
        this.footerInformation.push({ name: "FAQs", url: "/faq", useRouterLink: true});
    }

    ngOnDestroy(): void {
        if (this.authenticateSuscription) {
            this.authenticateSuscription.unsubscribe();
        }
    }

    public logoff() {
        this.oauthService.logOut();
        this.oauthStorage.removeItem("user");
        this.userProfile = undefined;
    }

}
