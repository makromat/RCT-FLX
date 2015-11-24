var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var todoActions = {

  addItem: function(item) {

	  console.log("Action called");

    AppDispatcher.handleAction({
      actionType: appConstants.ADD_ITEM,
      data: item
    });
  },

  addItems: function(items) {

	  console.log("Action called");

    AppDispatcher.handleAction({
      actionType: appConstants.ADD_ITEMS,
      data: items
    });
  },




  removeItem: function(index) {

    AppDispatcher.handleAction({
      actionType: appConstants.REMOVE_ITEM,
      data: index
    });
  }
};

module.exports = todoActions;
