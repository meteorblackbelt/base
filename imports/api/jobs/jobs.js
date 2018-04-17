import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import _ from 'lodash';

const Jobs = new Mongo.Collection('jobs');
export default Jobs;

Jobs.allow({
  insert: () => true,
  update: () => false,
  remove: () => false,
});

// Jobs.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
// });

Jobs.schema = new SimpleSchema({
  _id: { type: String },
  'company': { type: String },
  'title': { type: String },
  'description': { type: String },
  createdAt: {
    type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date()};
			} else {
				this.unset();  // Prevent user from supplying their own value
			}
		}
	}
});

Jobs.attachSchema(Jobs.schema);
