import Ember from 'ember';

export default Ember.Controller.extend({
  teamPath: Ember.computed(function () {
    const model = this.get('model');
    return `team.${model.team}`;
  }),
});
