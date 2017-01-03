import Ember from 'ember';

export default Ember.Route.extend({
  filter: Ember.inject.service(),
  model() {
    const data = [
      {
        id: 1,
        name: 'Rachel',
        team: 'engineering',
      },
      {
        id: 2,
        name: 'Antony',
        team: 'engineering',
      },
      {
        id: 3,
        name: 'Chris',
        team: 'leadership',
      },
      {
        id: 4,
        name: 'Ben',
        team: 'leadership',
      },
      {
        id: 5,
        name: 'Hannah',
        team: 'leadership',
      },
    ];

    return this.get('filter').filterByProperty(data, 'team', 'engineering');
  }
});
