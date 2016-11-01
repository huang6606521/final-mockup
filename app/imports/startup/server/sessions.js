import { Sessions } from '../../api/sessions/sessions.js';
import {_} from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const sessionsSeeds = [
  { course: 'ICS 311', topic: 'Algorithm', starttime: '8:00AM', endtime: '10:00AM', place:'ICS 318', people:'5' },
  { course: 'ICS 212', topic: 'C language',  starttime: '10:00AM', endtime: '12:00AM', place:'ICS 318', people:'3' },
  { course: 'ICS 314', topic: 'Meteor',  starttime: '3:00PM', endtime: '10:00PM', place:'ICS 318', people:'15' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Sessions.find().count() === 0) {
  _.each(sessionsSeeds, function seedSessions(stuff) {
    Sessions.insert(stuff);
  });
}
