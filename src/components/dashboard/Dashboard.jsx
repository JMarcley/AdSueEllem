var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
// var Header = require('./Header.jsx');
import FacebookStore from '../../stores/FacebookStore';
// import FacebookActionCreators from '../actions/FacebookActionCreators'
import Sidebar from './sidebar/Sidebar.jsx'
import ActiveContent from './activeContent/ActiveContent.jsx'

var Dashboard = React.createClass({
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
            <div className="dashboard container-fluid">
              <div className="row">
                <Sidebar />
                <ActiveContent />
              </div>
            </div>
        )
    }
});

module.exports = Dashboard;
