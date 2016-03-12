var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;
var Header = require('./Header.jsx');
var ReactRouter = require('react-router');
import FacebookStore from '../stores/FacebookStore';
import FacebookActionCreators from '../actions/FacebookActionCreators';
import Dashboard from './dashboard/Dashboard.jsx';

var App = React.createClass({

    getInitialState() {
      return FacebookStore.getState();
    },

    contextTypes: {
        router: React.PropTypes.func
    },

    componentDidMount() {
      FacebookStore.listen(this.onChange);
    },

    componentWillUnmount() {
      FacebookStore.unlisten(this.onChange);
    },

    onChange(state) {
      this.setState(state);
    },

    render : function() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.state.loggedIn === 'connected' ? <Dashboard /> : null}
                <RouteHandler />
            </div>
        )
    }
});

module.exports = App;
