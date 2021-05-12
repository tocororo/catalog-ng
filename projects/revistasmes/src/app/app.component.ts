/*
 *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
 *   All rights reserved.
 */

import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { AuthConfig, JwksValidationHandler, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { Subscription } from 'rxjs';
import { Environment, OauthAuthenticationService, OauthInfo, User, UserProfile } from 'toco-lib';


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

    public user: User;
public urlSignUp = 'https://personas.sceiba.cu/auth/realms/sceiba/clients-registrations/openid-connect/sceiba-angular-dev';

    public cuorHost: string;
    // public footerImage: string


    constructor(
        private environment: Environment,
        private oauthStorage: OAuthStorage,
        private oauthService: OAuthService,
        private authenticateService: OauthAuthenticationService,
        private router: Router) {
          this.configure();
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
      this.cuorHost = this.environment.cuorHost;
        let request = JSON.parse(this.oauthStorage.getItem('user'));
        if (request){
          this.userProfile = request.data.userprofile;
        }
        
        console.log(this.userProfile)
          this.authenticateSuscription = this.authenticateService.authenticationSubjectObservable.subscribe(
            (request) => {
              if (request != null) {
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

  /*   public logoff() {
        this.oauthService.logOut();
        this.oauthStorage.removeItem("user");
        this.userProfile = undefined;
    } */

    private configRoles(){
      let roles = '';
      for (const rol in this.user.roles) {
        const element = this.user.roles[rol];
        roles += "," + element.name;
      }
      this.oauthStorage.setItem("roles", roles)
    }
    /**
     * logout
     */
    
    /**
     * hasPermission return true if the user have permission
     */
    /* public get hasPermission(): boolean {
      let permission = new Permission();
    
      if (permission.hasPermissions("curator") || permission.hasPermissions("admin")){
        return true;
      }
      return false;
    } */
    
      /**
     * hasPermission return true if the user have permission
     */
    /* public get hasPermissionAdmin(): boolean {
      let permission = new Permission();
    
      if (permission.hasPermissions("admin")){
        return true;
      }
      return false;
    } */
    
    public get isHome(){
      return this.router.url == '/';
    }
    
    private configure() {
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
    public login() {
      this.oauthService.initImplicitFlow();
    }
    
    public logoff() {
        this.oauthService.logOut();
    }
    
    public get name() {
        let claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims['given_name'];
    }
    }
    
    
    export const authConfig: AuthConfig = {
    
    // Url of the Identity Provider
    issuer: "https://personas.sceiba.cu/auth/realms/sceiba",
    
    loginUrl: 'https://personas.sceiba.cu/auth/realms/sceiba/protocol/openid-connect/auth',
    
    tokenEndpoint: 'https://personas.sceiba.cu/auth/realms/sceiba/protocol/openid-connect/token',
    
    logoutUrl: 'https://personas.sceiba.cu/auth/realms/sceiba/protocol/openid-connect/logout',
    
    oidc: true,
    
    requireHttps: true,
    
    userinfoEndpoint: 'https://personas.sceiba.cu/auth/realms/sceiba/protocol/openid-connect/userinfo',
    
    // URL of the SPA to redirect the user to after login
    redirectUri: 'https://localhost:4200',
    
    // The SPA's id. The SPA is registered with this id at the auth-server
    clientId: 'sceiba-angular-dev',
    
    
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email',
    }
