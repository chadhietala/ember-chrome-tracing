const Command = require('ember-cli/lib/models/command');

module.exports = Command.extend({
  name: 'tracing:prepare',
  aliases: ['t:prepare', 't:p'],
  anonymouseOptions: [
    '<path>'
  ],
  availableOptions: [
    { name: 'archive', type: 'string', 'default': 'archive' }
  ],
  init() {
    this._super.apply(this, arguments);
  }
});