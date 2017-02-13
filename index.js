/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-chrome-tracing',
  includedCommands: function() {
    return require('./lib/commands');
  }
};
