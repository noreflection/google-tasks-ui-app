import { observable, action } from 'mobx';
import gapi from 'gapi-client';

export default class PaginatorStore {
  @observable status = '';

  @observable
  clientId = '908004947575-7ttokrp4uptnvf5hnr85g2rg622qbmqe.apps.googleusercontent.com';
  @observable apiKey = 'AIzaSyDqzUK_5AlAtmgsdm56ahcoslME91czdRE';
  @observable
  discoveryDocs = [
    'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest'
  ];
  @observable scopes = 'https://www.googleapis.com/auth/tasks.readonly';

  authorizeUser(params) {
    //eslint-disable-next-line
    gapi.load('client:auth2', this.initClient.call(this));
    //this.initClient();
  }

  /*  authorize(params) {
    return new Promise((resolve, reject) => {
      //eslint-disable-next-line
      gapi.auth.authorize(
        {
          client_id: this.clientId,
          scope: this.scopes,
          //immediate: params.immediate,
          cookie_policy: 'single_host_origin'
        },
        authResult => {
          if (authResult.error) {
            return reject(authResult.error);
          }
          // eslint-disable-next-line
          return gapi.client.load('tasks', 'v1', () =>
            gapi.client.load('plus', 'v1', () => resolve())
          );
        }
      );
    });
  } */

  initClient() {
    //eslint-disable-next-line
    gapi.client
      .init({
        apiKey: this.apiKey,
        clientId: this.clientId,
        discoveryDocs: this.discoveryDocs,
        scope: this.scopes
      })
      .then(() => {
        //eslint-disable-next-line
        console.log(1,gapi.auth2.getAuthInstance());
        gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(() => this.updateSigninStatus.call(this));

        //eslint-disable-next-line
        () =>
          this.updateSigninStatus(
            //eslint-disable-next-line
            gapi.auth2.getAuthInstance().isSignedIn.get()
          );
        //authorizeButton.onclick = handleAuthClick;
        //signoutButton.onclick = handleSignoutClick;
      });
  }

  handleAuthClick(event) {
    //eslint-disable-next-line
    gapi.auth2.getAuthInstance().signIn();
    /* gapi.auth2.authorize({
      apiKey: this.apiKey,
      clientId: this.clientId,
      discoveryDocs: this.discoveryDocs,
      scope: this.scopes
    }); */ //.then(console.log('object')); //.call(this).signIn(); */
  }
  handleSignoutClick(event) {
    //eslint-disable-next-line
    gapi.auth2.getAuthInstance().signOut();
  }

  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      //authorizeButton.style.display = 'none';
      //signoutButton.style.display = 'block';
      //listTaskLists();
    } else {
      //authorizeButton.style.display = 'block';
      //signoutButton.style.display = 'none';
    }
  }
}
