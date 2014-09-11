var lifecycle = {
  teardown: function () {
    $.address.postcode.defaults = {};
  }
};

module('read', lifecycle);
