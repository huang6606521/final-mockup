// import { Template } from 'meteor/templating';
// import { ReactiveDict } from 'meteor/reactive-dict';
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { _ } from 'meteor/underscore';
// import { Sessions, SessionsSchema } from '../../api/sessions/sessions.js';
//
// /* eslint-disable no-param-reassign */
//
//
//
// Template.Create_Session_Page.onCreated(function onCreated() {
//   this.messageFlags = new ReactiveDict();
//   this.context = SessionsSchema.namedContext('Create_Session_Page');
// });
//
// Template.Create_Session_Page.helpers({
//   errorClass() {
//     return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
//   },
//   displayFieldError(fieldName) {
//     const errorKeys = Template.instance().context.invalidKeys();
//     return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
//   },
// });
//
// // Template.Create_Session_Page.onRendered(function enableSemantic() {
// //   const instance = this;
// //   instance.$('select.ui.dropdown').dropdown();
// //   instance.$('.ui.selection.dropdown').dropdown();
// //   instance.$('select.dropdown').dropdown();
// //   instance.$('.ui.checkbox').checkbox();
// //   instance.$('.ui.radio.checkbox').checkbox();
// // });
//
// Template.Create_Session_Page.events({
//   'submit .contact-data-form'(event, instance) {
//     event.preventDefault();
//     // Get name (text field)
//     const course = event.target.course.value;
//     const topic = event.target.topic.value;
//     const creator = event.target.creator.value;
//     const starttime = event.target.starttime.value;
//     const endtime = event.target.endtime.value;
//     const place = event.target.place.value;
//     const people = event.target.people.value;
//
//     const newSession = { course, topic, creator, starttime, endtime,place,people };
//     // Clear out any old validation errors.
//     instance.context.resetValidation();
//     // Invoke clean so that newStudentData reflects what will be inserted.
//     SessionsSchema.clean(newSession);
//     // Determine validity.
//     instance.context.validate(newSession);
//
//     if (instance.context.isValid()) {
//       Sessions.insert(newSession);
//       FlowRouter.go('Home_Page');
//     }
//   },
// });
//
//
//
