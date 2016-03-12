var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
// var Header = require('./Header.jsx');
// import FacebookStore from '../../stores/FacebookStore';
// import FacebookActionCreators from '../actions/FacebookActionCreators'

var ActiveContent = React.createClass({
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
            <div className="activeContent col-md-10">
              <div>
                <h2>important title</h2>
                <p>important words</p>
              </div>
            </div>
        )
    }
});

module.exports = ActiveContent;
