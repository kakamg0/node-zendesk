//ticketfields.js: Client for the zendesk API.


var util        = require('util'),
    Client      = require('./client').Client,
    defaultUser = require('./helpers').defaultUser;


var TicketFieldOptions = exports.TicketFieldOptions = function (options) {
  this.jsonAPINames = [ 'custom_field_options', 'custom_field_option' ];
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(TicketFieldOptions, Client);

// ######################################################## Ticket Field Options
// ====================================== Listing Tickets Field Options
TicketFieldOptions.prototype.list = function (ticketFieldID, cb) {
  this.requestAll('GET', ['ticket_fields', ticketFieldID, 'options'], cb);//all
};


// ====================================== Viewing Tickets Field Option
TicketFieldOptions.prototype.show = function (ticketFieldID, optionID, cb) {
  this.request('GET', ['ticket_fields', ticketFieldID, 'options', optionID], cb);
};

// ====================================== Creating/Updating Tickets Field Option
TicketFieldOptions.prototype.update = function (ticketFieldID, ticketFieldOption, cb) {
  this.request('POST', ['ticket_fields', ticketFieldID, 'options'], ticketFieldOption,  cb);
};

// ====================================== Deleting Tickets Field Option
TicketFieldOptions.prototype.delete = function (ticketFieldID, optionID, cb) {
  this.request('DELETE', ['ticket_fields', ticketFieldID, 'options', optionID],  cb);
};

