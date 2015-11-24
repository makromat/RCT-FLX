var React = require('react');

var AddItem = React.createClass({

  handleSubmit: function(e) {
    if (e.keyCode === 13) {
      var newItem = this.refs.newItem.value;
      this.refs.newItem.value = '';
      this.props.add(newItem);
    }
  },
  render: function() {
    return (
      React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", ref: "newItem", className: "form-control", placeholder: "New Item", onKeyDown: this.handleSubmit })
      )
    )
  }
});

module.exports = AddItem;
