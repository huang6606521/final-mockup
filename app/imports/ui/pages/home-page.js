import { Template } from 'meteor/templating';
import { Sessions } from '../../api/sessions/sessions.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  sessionsList() {
    return Sessions.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Sessions');
  });

});