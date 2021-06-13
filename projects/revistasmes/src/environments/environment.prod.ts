import { Environment } from 'toco-lib';

class EnvironmentImpl implements Environment {
  production = true;
  sceibaHost = 'https://sceiba.cu/';
  cuorHost = 'https://orgs.sceiba.cu/';
  sceibaApi = 'https://sceiba.cu/api/';
  cuorApi = 'https://orgs.sceiba.cu/api/';

  appHost = 'https://revistasmes.sceiba.cu';
  appName = 'Registro de Revistas Científicas del MES';

  websiteUsername_Twitter = '@SceibaCuba';
  websiteUsername_Facebook = '@sceiba';

  oauthRedirectUri = 'https://revistasmes.sceiba.cu/';
  oauthClientId = 'tp64znMu6DHzqWOxc6Go1UDl6GDmEc7X0I4VK8iQ';
  oauthScope = 'user:email';
  topOrganizationPID = 'orgaid.223';
  cachableUrls = [];

  matomoUrl = 'https://crai-stats.upr.edu.cu/';
  matomoSiteId = 7;
}

export const environment = new EnvironmentImpl();
