export default class Auth0Error extends Error {
  constructor (json) {
    super();
    this.name = json.error || json.code || 'a0.internal.failed';
    this.message = json.description || json.error_description || response.statusText || response.status;
    this.json = json;
  }
};
