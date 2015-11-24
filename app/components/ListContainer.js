var React = require('react');
var io = require('socket.io-client');
var AddItem = require('./AddItem');
var List = require('./List');
var todoStore = require('../stores/todoStore');
var todoActions = require('../actions/todoActions');

var ListContainer = React.createClass({

	 propTypes: {
		 list: React.PropTypes.array,
	 },
  getInitialState: function() {
    return {
      list: todoStore.getList()
    }
  },
	componentWillMount: function componentWillMount() {
		this.socket = io('www.example.com');
		this.socket.on('tables', this.handleAddItem);
	},
  componentDidMount: function() {
    todoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    todoStore.removeChangeListener(this._onChange);
  },
  handleAddItem: function(newItem) {
	  console.log("handleAddItem called");
    todoActions.addItem(newItem);
  },
  handleRemoveItem: function(index) {
    todoActions.removeItem(index);
  },
  _onChange: function() {
    this.setState({
      list: todoStore.getList()
    });
  },
  render: function() {
    return (
      React.createElement(
        "div",
        { className: "col-sm-6 col-md-offset-3" },
        //React.createElement(AddItem, { add: this.handleAddItem }),
        React.createElement(List, { items: this.state.list, remove: this.handleRemoveItem })
      )
    )
  }
});

module.exports = ListContainer;
