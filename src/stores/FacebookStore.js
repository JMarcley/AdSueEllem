import alt from '../alt';
import FacebookActionCreators from '../actions/FacebookActionCreators';

const FACEBOOK_CHANGE_EVENT = 'FACEBOOK_CHANGE_EVENT';

class FacebookStore {
    constructor() {
        var self = this;
        this.bindListeners({
          handleLoginStatus: FacebookActionCreators.LOGIN_STATUS,
          handleLogin: FacebookActionCreators.LOGIN,
          handleLogout: FacebookActionCreators.LOGOUT,
          handleGettingFacebookProfilePicture: FacebookActionCreators.GETTING_FACEBOOK_PROFILE_PICTURE,
          handleReceivedFacebookProfilePicture: FacebookActionCreators.RECEIVED_FACEBOOK_PROFILE_PICTURE
        });
        this.on('init', () => {
          this.facebookAuthData = {};
          this.facebookPictureData = {};
          this.accessToken = null;
          this.userId = null;
          this.loggedIn = '';
          this.facebookPictureUrl = '';
          this.facebookPictureStatus = '';
        });
    }

    handleLoginStatus(data) {
      this.setFacebookAuthData(data);
    }

    handleLogin(data) {
      this.setFacebookAuthData(data);
    }

    handleLogout(data) {
      this.setFacebookAuthData(data);
    }

    handleGettingFacebookProfilePicture(data) {
      this.setFacebookPictureData('FACEBOOK_GETTING_PICTURE', null);
    }

    handleReceivedFacebookProfilePicture(data) {
      this.setFacebookPictureData('FACEBOOK_RECEIVED_PICTURE', data)
    }

    setFacebookAuthData(data) {
        this.facebookAuthData = data;

        if (data.status === 'connected') {
          this.accessToken = data.authResponse.accessToken;
          this.userId = data.authResponse.userID;
          this.loggedIn = data.status;
        } else {
          this.facebookAuthData = {};
          this.facebookPictureData = {};
          this.accessToken = null;
          this.userId = null;
          this.loggedIn = '';
          this.facebookPictureUrl = '';
          this.facebookPictureStatus = '';
        }
    }

    setFacebookPictureData(type, data) {
        this.facebookPictureStatus = type;

        if (data) {
            this.facebookPictureData = data.data;
            this.facebookPictureUrl = data.data.url;
        } else {
            this.facebookPictureData = {};
        }
    }
}

module.exports = alt.createStore(FacebookStore, 'FacebookStore');
