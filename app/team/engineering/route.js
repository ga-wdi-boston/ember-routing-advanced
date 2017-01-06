import Ember from 'ember';

export default Ember.Route.extend({
  filter: Ember.inject.service(),
  model() {
    return this.get('filter').filterByProperty('team', 'engineering');
  }
});
