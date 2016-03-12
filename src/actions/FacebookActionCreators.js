import alt from '../alt';
var Promise = require('es6-promise').Promise;
// var mongo = require('mongodb');
// var UserDB = require('monk')('localhost:27017/UserDB');
import config from '../../config.js';
import mongoose from 'mongoose';
import User from '../models/user.js';


class FacebookActionCreators {
  constructor() {
    this.generateActions(
      'loginStatus',
      'login',
      'logout',
      'gettingFacebookProfilePicture', // passthrough data completely replaces gettingFacebookProfilePicture action
      'receivedFacebookProfilePicture'
    );
  }

  getLoginStatus () {
    window.FB.getLoginStatus((response) => {
      this.actions.loginStatus(response);
      // if (response.authResponse.userID) {
      //   User.findOne({userID: response.authResponse.userID}, function(err, user) {
      //     console.log(user);
      //   });
      // }
    });
  }

  // checkForUser (userID) {
  //   if (userID) {
  //     User.findOne()
  //   }
  // }

  // getLoginStatus() {
  //   return (dispatch) => {
  //     console.log(window);
  //     window.FB.getLoginStatus((response) => {
  //       console.log(response);
  //       dispatch(response);
  //     });
  //   }
  // }

  initFacebook()  {
      var self = this;
      window.fbAsyncInit = function() {
          FB.init({
            appId      : config.APP_ID,
            xfbml      : true,
            version    : 'v2.5',
            status     : true,
            cookie     : true
          });

// problems with this function call with regard to time and/or syntax //
          // after initialization, get the login status
          self.actions.getLoginStatus();
      },

      (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  doLogin () {
    window.FB.login((response) => {
      if (response.status === 'connected') {
        this.actions.login(response);
      }
    })
  }

  // login() {
  //   console.log('logging in');
  //   return (dispatch) => {
  //     window.FB.login((response) => {
  //       console.log(response);
  //       if (response.status === 'connected') {
  //         dispatch(response)
  //       }
  //     });
  //   }
  // }

  doLogout() {
    window.FB.logout((response) => {
      console.log('logout called');
      this.actions.logout(response);
    })
  }

  // logout() {
  //   return (dispatch) => {
  //     window.FB.logout((response) => {
  //         dispatch(response);
  //     })
  //   }
  // }

  // gettingFacebookProfilePicture (data)  {
  //   this.actions.facebookProfilePictureData(data);
  // }

  getFacebookProfilePicture(userId) {
    this.actions.gettingFacebookProfilePicture({});

    window.FB.api(`/${userId}/picture?type=large`, (response) => {
        this.actions.receivedFacebookProfilePicture(response);
    });

  }

  // getFacebookProfilePicture(userId) {
  //     this.actions.facebookProfilePictureData({}); //pass an empty object to store
  //
  //     return (dispatch) => {
  //         window.FB.api(`/${userId}/picture?type=large`, (response) => {
  //             dispatch(response);
  //         })
  //     }
  // }

}
//
// const FacebookActionCreators = {
//     initFacebook: () => {
//         window.fbAsyncInit = function() {
//             FB.init({
//               appId      : APP_ID,
//               xfbml      : true,
//               version    : 'v2.5'
//             });
//
//             // after initialization, get the login status
//             FacebookActionCreators.getLoginStatus();
//         },
//
//         (function(d, s, id){
//          var js, fjs = d.getElementsByTagName(s)[0];
//          if (d.getElementById(id)) {return;}
//          js = d.createElement(s); js.id = id;
//          js.src = "//connect.facebook.net/en_US/sdk.js";
//          fjs.parentNode.insertBefore(js, fjs);
//        }(document, 'script', 'facebook-jssdk'));
//     },
//
//     getLoginStatus() {
//       return (dispatch) => {
//         window.FB.getLoginStatus((response) => {
//           dispatch(response)
//         });
//       }
//     },
//
//     login() {
//       return (dispatch) => {
//         window.FB.login((response) => {
//           if (response.status === 'connected') {
//             dispatch(response)
//           }
//         });
//       }
//     },
//
//     logout() {
//       return (dispatch) => {
//         window.FB.logout((response) => {
//             dispatch(response);
//         })
//       }
//     },
//
//     gettingFacebookProfilePicture: (data) => {
//       return data;
//     },
//
//     getFacebookProfilePicture(userId) {
//         this.gettingFacebookProfilePicture({});
//
//         return (dispatch) => {
//             window.FB.api(`/${userId}/picture?type=large`, (response) => {
//                 dispatch(response);
//             })
//         }
//     }
//
// }

export default alt.createActions(FacebookActionCreators);
