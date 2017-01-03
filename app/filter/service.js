import Ember from 'ember';

export default Ember.Service.extend({
  filterByProperty(model, property_name, filter) {
    return model.filter(function(obj) {
      return obj[property_name] === filter;
    });
  },
  filterById(model, id) {
    return model.filter(function (obj) {
      return obj.id === id;
    });
  }
});
