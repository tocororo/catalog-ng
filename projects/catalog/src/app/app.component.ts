
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { Subscription } from 'rxjs';
import { Environment, OauthAuthenticationService, OauthInfo, UserProfile } from 'toco-lib';


@Component({
    selector: 'catalog-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
 /**
   * Returns the available language texts.
   */
  public languageTexts: string[];
  /**
   * Returns the available language abbreviations.
   */
  public languageAbbrs: string[];
  /**
   * Returns the language selected.
   * The default language is Spanish; that is, the zero index.
   */
  public languageSelected: number;

  public footerSites: Array<{ name: string, url: string, useRouterLink: boolean }>;

  public footerInformation: Array<{ name: string, url: string, useRouterLink: boolean }>;

  public urlLogin: string;

  public sceibaHost: string;


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

    title = 'Catálogo';
    isOnline: boolean;
    islogged: boolean;
    userProfile: UserProfile;
    loading = false;
    private authenticateSuscription: Subscription = null;

    constructor(
        private environment: Environment,
        private oauthStorage: OAuthStorage,
        private oauthService: OAuthService,
        private authenticateService: OauthAuthenticationService,
        private router: Router,
        private _transServ: TranslateService) {
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
      this.languageTexts = [ 'Español', 'English' ];
      this.languageAbbrs = [ 'es', 'en' ];
      this.languageSelected = 0;  /* The default language is Spanish; that is, the zero index. */
      this._transServ.setDefaultLang('es');
      this._transServ.use('es');
      this._transServ.addLangs(this.languageAbbrs);
      //this._recaptchaDynamicLanguageLoaderServ.updateLanguage('es');

      this.sceibaHost = this.environment.sceibaHost;

      this.footerSites = Array();
      this.footerInformation = Array();

      // this.footerSites.push({ name: "MES", url: "https://www.mes.gob.cu", useRouterLink: false});
      // this.footerSites.push({ name: "ONEI", url: "http://www.onei.gob.cu/", useRouterLink:false});
      // this.footerSites.push({ name: "GRID", url: "https://www.grid.ac", useRouterLink: false});
      // this.footerSites.push({ name: "ROR", url: "https://ror.org/", useRouterLink: false});
      // this.footerSites.push({ name: "Wikidata", url: "https://www.wikidata.org/wiki/Wikidata:Main_Page", useRouterLink: false});

      this.footerInformation.push({ name: "ACERCA_DE", url: "/about", useRouterLink: true });
      this.footerInformation.push({ name: "PRIVACIDAD", url: "/policy", useRouterLink: true });
      // this.footerInformation.push({ name: "PRIVACIDAD", url: "https://sceiba-lab.upr.edu.cu/page/politicas", useRouterLink: false});
      this.footerInformation.push({ name: "CONTACTOS", url: "/contact", useRouterLink: true });

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
