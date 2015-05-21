var React = require('react');
var ShowList = require('./Child');

var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Steph Curry',
      friends: ['Klay Thompson', 'Draymond Green', 'Andre Iguodala']
    }
  },
  render: function(){
    return (
      <div>
        <h1> React Starter Kit! </h1>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});

module.exports = FriendsContainer;