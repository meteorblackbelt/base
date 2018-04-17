import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';
import _ from 'lodash';

const Users = Meteor.users; //new Mongo.Collection('users');
export default Users;

Users.allow({
  insert: () => false,
	update(userId, doc, fields, modifier) {
    return (_.difference(fields, ['emails', 'profile']).length === 0) && doc._id === userId;
	},
  remove: () => false,
});

// Users.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
// });

Users.schema = new SimpleSchema({
  _id: { type: String },
  emails: { type: Array },
  'emails.$': { type: Object },
  'emails.$.address': { type: String },
  'emails.$.verified': { type: Boolean },
  'profile': { type: Object },
  'profile.position': { type: String },
  'profile.name': { type: String },
  createdAt: { type: Date },
  services: { type: Object, blackbox: true }
});

Users.attachSchema(Users.schema);

Factory.define('user', Users, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
});

