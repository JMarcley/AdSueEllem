var React = require('react/addons');
var Route = require('react-router').Route;
var PostListView = require('./components/PostListView.jsx');
var SinglePostView = require('./components/SinglePostView.jsx');
var App = require('./components/App.jsx');
var Dashboard = require('./components/dashboard/Dashboard.jsx')

var routes = (
    <Route name='home' path="/" handler={App}>
        <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
    </Route>
);

module.exports = routes;

// <Route name="postListView" path="/" handler={PostListView}/>
// <Route name="singlePostView" path="/post/:id/:slug" handler={SinglePostView} />
