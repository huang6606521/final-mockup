import { Sessions } from '../../api/sessions/sessions.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Sessions', function publishSessions() {
  return Sessions.find();
});
