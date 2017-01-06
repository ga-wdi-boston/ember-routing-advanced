import Ember from 'ember';

export default Ember.Route.extend({
  filter: Ember.inject.service(),
  setupController(controller, employee) {
   controller.set('model', employee);
  },
  model(params) {
    const employees = this.get('filter').employees;
    return employees.find((employee) => employee.id === +params.employee_id);
  }
});
