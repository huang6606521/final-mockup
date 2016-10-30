import {Sessions} from '../../api/sessions/sessions.js';
import {_} from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const sessionsSeeds = [
  { course: 'ICS 311', topic: 'Algorithm', starttime: '8:00AM', endtime: '10:00AM', place:'ICS 318', people:'5' },
  { course: 'ICS 314', topic: 'Meteor',  starttime: '8:00AM', endtime: '10:00AM', place:'ICS 318', people:'5' },
  { course: 'ICS 314', topic: 'Meteor',  starttime: '8:00AM', endtime: '10:00AM', place:'ICS 318', people:'5' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Sessions.find().count() === 0) {
  _.each(sessionsSeeds, function seedSessions(stuff) {
    Sessions.insert(stuff);
  });
}
