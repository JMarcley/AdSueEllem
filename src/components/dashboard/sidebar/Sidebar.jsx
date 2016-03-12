var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
// var Header = require('./Header.jsx');
// import FacebookStore from '../../stores/FacebookStore';
// import FacebookActionCreators from '../actions/FacebookActionCreators'

var Sidebar = React.createClass({
    //
    // getInitialState() {
    //   // return FacebookStore.getState();
    // },
    //
    // componentDidMount() {
    //   // FacebookActionCreators.initFacebook();
    //   // FacebookStore.listen(this.onChange);
    // },
    //
    // componentWillUnmount() {
    //   // FacebookStore.unlisten(this.onChange);
    // },
    //
    // onChange(state) {
    //   // this.setState(state);
    // },

    render : function() {
        return (
            <div className="sidebar col-md-2">
              <ul>
                <li>useful</li>
                <li>things</li>
                <li>go</li>
                <li>here</li>
              </ul>
            </div>
        )
    }
});

module.exports = Sidebar;
