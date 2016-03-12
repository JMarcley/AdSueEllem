var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');
import UserInfo from './login/UserInfo.jsx';
import FacebookActionCreators from '../actions/FacebookActionCreators';
import FacebookStore from '../stores/FacebookStore';

var Header = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    showAllPosts : function(e){
        e.preventDefault();
        PostActions.loadAllPosts((function(){
           this.context.router.transitionTo('postListView');
        }).bind(this));
    },

    render : function() {
        return (
            <div className="header">
                <h1><a href="#" onClick={this.showAllPosts}>Ad Sue Ellem</a></h1>
                <img src="https://s-media-cache-ak0.pinimg.com/236x/de/40/0c/de400cf654b1b77671652b5341d229a8.jpg" height="100px"></img>
                <UserInfo />
            </div>
        )
    }
});

module.exports = Header;
