var React = require('react');
var ListItem = require('./ListItem.jsx');

var items = [
    {
        id: 1,
        text: 'Jamon'
    }, {
        id: 2,
        text: 'Queso'
    }, {
        id: 3,
        text: 'Vino'
    }
];

var List = React.createClass({
    render: function() {
      var listItems = items.map(function(item) {
          return <ListItem key={item.id} ingredient={item.text}/>
      });
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
});

module.exports = List;
