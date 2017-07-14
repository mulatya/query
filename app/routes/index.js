import Ember from 'ember';

// var questions = [{
//   id: 1,
//   author: "Sugar spicy",
//   question: "lodid bbvw bwunvw buiwv?",
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
});
