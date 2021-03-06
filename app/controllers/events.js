import Ember from "ember";
import AnchorControllerSupport from "ember-anchor/mixins/controller-support";

export default Ember.Controller.extend(AnchorControllerSupport, {
  filterData: Ember.inject.service(),
  queryParams: ['anchor']
});
