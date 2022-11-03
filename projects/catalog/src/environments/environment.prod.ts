import { Environment } from 'toco-lib';

class EnvironmentImpl implements Environment {
  production = false;
  sceibaHost = 'https://cuba-iroko.sceiba.org/';
  cuorHost = 'https://cuba-iroko.sceiba.org/';
  sceibaApi = 'https://cuba-iroko.sceiba.org/api/';
  cuorApi = 'https://cuba-iroko.sceiba.org/api/';

  appHost = 'https://cuba-iroko.sceiba.org';
  appName = 'Sceiba';

  websiteUsername_Twitter = '@SceibaCuba';
  websiteUsername_Facebook = '@sceiba';

  oauthRedirectUri = 'https://cuba-catalogo.sceiba.org/';
  oauthClientId = 'Ami65AuaQHmaX01r6m5iVX1jRXfoQohkKW0V11fH';
  oauthScope = 'user:email';
  topOrganizationPID = '';
  cachableUrls = [];

  matomoUrl = 'https://crai-stats.upr.edu.cu/';
  matomoSiteId = 7;
}

export const environment = new EnvironmentImpl();
