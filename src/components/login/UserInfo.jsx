var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;

import FacebookActionCreators from '../../actions/FacebookActionCreators';
import FacebookStore from '../../stores/FacebookStore';
import FacebookLogin from './FacebookLogin';
import FacebookLogout from './FacebookLogout';
import FacebookDownloadPicture from './FacebookDownloadPicture';
import FacebookPicture from './FacebookPicture';

var UserInfo = React.createClass({

    getInitialState() {
      return FacebookStore.getState();
    },

    componentDidMount() {
        console.log(this.state);
        FacebookActionCreators.initFacebook();
        FacebookStore.listen(this.onChange);
    },

    componentWillUnmount() {
      FacebookStore.unlisten(this.onChange);
    },

    onChange(state) {
      this.setState(state);
    },

    render() {
        return (
            <div>
                {this.state.loggedIn !== 'connected' ? <FacebookLogin /> : null}
                {this.state.loggedIn === 'connected' ? <FacebookLogout /> : null}
                <p>Facebook logged in: {this.state.loggedIn === 'connected' ? 'true' : 'false'}</p>
                <p>User ID is: {this.state.userId}</p>
                {this.state.userId ? <FacebookDownloadPicture userId={this.state.userId} /> : null}

                <FacebookPicture
                    facebookPictureStatus={this.state.facebookPictureStatus}
                    facebookPictureUrl={this.state.facebookPictureUrl} />
            </div>

        );
    }
})

module.exports = UserInfo;
