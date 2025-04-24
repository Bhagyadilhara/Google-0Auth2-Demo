import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  clientId: '3534841119-7jps5d3s9e6ges9rpc8hqiqjt5id5n33.apps.googleusercontent.com',
  redirectUri: window.location.origin + '/dashboard',
  scope: 'openid profile email',
};