import Ember from 'ember';

export default Ember.Service.extend({
  employees: [
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
  ],
  filterByProperty(property_name, filter) {
    const employees = this.get('employees');
    return employees.filter(function(obj) {
      return obj[property_name] === filter;
    });
  },
});
