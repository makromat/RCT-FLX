var React = require('react');

var List = React.createClass({
  render: function() {


    var listItems = this.props.items.map(function(item, index) {

      return (
	      console.log(this),
        <li key={index} className="list-group-item">
          <span className="glyphicon glyphicon-remove">
          </span>
          <span>
           {console.log(item)}
          </span>
        </li>
      )
    }.bind(this));

    return (
      <ul>
        {listItems}
      </ul>
    )

  }
});

module.exports = List;