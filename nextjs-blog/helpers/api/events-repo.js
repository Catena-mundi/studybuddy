const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let events = require('./../../data/events.json');

export const eventsRepo = {
  getAll: () => events,
  getById: id => events.find(x => x.id.toString() === id.toString()),
  find: x => events.find(x),
  create,
  update,
  delete: _delete
};

function create(event) {
  // add and save user
  events.push(event);
  saveData();
}

function update(id, params) {
  const event = events.find(x => x.id.toString() === id.toString());

  // set date updated
  event.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(event, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted user and save
  events = events.filter(x => x.id.toString() !== id.toString());
  saveData();
}

// private helper functions

function saveData() {
  fs.writeFile(process.env.PWD + '/data/events.json', JSON.stringify(events));
}
