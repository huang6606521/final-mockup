import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Sessions = new Mongo.Collection('Sessions');

/**
 * Create the schema for Stuff
 */
export const sessionsSchema = new SimpleSchema({
  course: {
    label: 'course',
    type: String,
    optional: false,
    max: 200,

  },
  topic: {
    label: 'topic',
    type: String,
    optional: false,
    max: 200,

  },

  starttime: {
    label: 'starttime',
    type: String,
    optional: false,
    max: 200,

  },
  endtime: {
    label: 'endtime',
    type: String,
    optional: false,
    max: 200,

  },
  place: {
    label: 'place',
    type: String,
    optional: false,
    max: 200,

  },
  people: {
    label: 'people',
    type: String,
    optional: false,
    max: 200,

  },

});

Sessions.attachSchema(sessionsSchema);
