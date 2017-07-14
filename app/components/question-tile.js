import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
   update(Question, params) {
     this.sendAction('update', Question, params);
   },
   }

});
