import Ember from 'ember';

// var questions = [{
//   id: 1,
//   author: "Sugar spicy",
//   questio: "lodid bbvw bwunvw buiwv?",
// }, {
//   id: 2,
//   author: "Mike TV",
//   questio: "nreinbi JNION d?",
//
// }, {
//   id: 3,
//   author: "Red May",
//   questio: "Why do I love staring at fish so much?",
//
// }];



export default Ember.Route.extend({
  model() {
     return this.store.findAll('question');
   },
   actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    update(question, params) {
  Object.keys(params).forEach(function(key) {
    if(params[key]!==undefined) {
      question.set(key,params[key]);
    }
  });
  question.save();
  this.transitionTo('index');
}
  }
});
