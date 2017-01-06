import Ember from 'ember';

export default Ember.Route.extend({
    filter: Ember.inject.service(),
    model: function() {
      return this.get('filter').filterByProperty('team', 'leadership');
    },
});
