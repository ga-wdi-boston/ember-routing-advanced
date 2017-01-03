import Ember from 'ember';

export default Ember.Route.extend({
  filter: Ember.inject.service(),
  model: function(params) {
    const data = [
      {
        id: 1,
        name: 'Crock Pot',
        manufacturer: 'Farberware',
        price: 40
      },
      {
        id: 2,
        name: 'Food Processor',
        manufacturer: 'Cuisinart',
        price: 25
      },
      {
        id: 3,
        name: 'Electric Griddle',
        manufacturer: 'George Foreman Grills',
        price: 15
      },
    ];
    return this.get('filter').filterById(data, 'id', params['product_id']);
  },
});
