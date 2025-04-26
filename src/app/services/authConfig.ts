import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  clientId: '371475723302-759iqqg61652t5kjuv9jkthk3bmnn1go.apps.googleusercontent.com',
  redirectUri: window.location.origin + '/dashboard',
  scope: 'openid profile email',
};