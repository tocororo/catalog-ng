import { Environment } from 'toco-lib';

class EnvironmentImpl implements Environment {
  production = false;
  sceibaHost = 'https://cuba.sceiba.org/';
  cuorHost = 'https://cuba.sceiba.org/';
  sceibaApi = 'https://cuba.sceiba.org/api/';
  cuorApi = 'https://cuba.sceiba.org/api/';

  appHost = 'https://cuba.sceiba.org';
  appName = 'Sceiba';

  websiteUsername_Twitter = '@SceibaCuba';
  websiteUsername_Facebook = '@sceiba';

  oauthRedirectUri = 'https://cuba.sceiba.org/catalog/';
  oauthClientId = 'BCVhHINtHeBRkbNRnOZozCi6jbCDJoMM2KbRsh0G';
  oauthScope = 'user:email';
  topOrganizationPID = '';
  cachableUrls = [];

  matomoUrl = 'https://crai-stats.upr.edu.cu/';
  matomoSiteId = 7;
}

export const environment = new EnvironmentImpl();
