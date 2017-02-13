const Command = require('ember-cli/lib/models/command');

module.exports = Command.extend({
  name: 'tracing:measure',
  aliases: ['t:measure', 't:m'],
  anonymouseOptions: [
    '<path>'
  ],
  availableOptions: [
    { name: 'experiments', type: 'string', 'default': 'experiments.json' }
  ],
  init() {
    this._super.apply(this, arguments);

  }
});


/**
 *
 * ember tracing:measure /feed
 *
 * [
 *   base-line,
 *   exp1,
 *   exp2,
 * ]
 *
 *
 *
 *
 *
 */