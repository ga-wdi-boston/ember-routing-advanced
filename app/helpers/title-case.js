import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
    const str = params[0];
    return str.replace(/\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase();
    });
});
