import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Users from './users';
import rateLimit from '../../modules/rate-limit.js';

// export const upsertUser = new ValidatedMethod({
//   name: 'users.upsert',
//   validate: new SimpleSchema({
//     _id: { type: String, optional: true },
//     title: { type: String, optional: true },
//     body: { type: String, optional: true },
//   }).validator(),
//   run(user) {
//     return Users.upsert({ _id: user._id }, { $set: user });
//   },
// });

// export const removeUser = new ValidatedMethod({
//   name: 'users.remove',
//   validate: new SimpleSchema({
//     _id: { type: String },
//   }).validator(),
//   run({ _id }) {
//     Users.remove(_id);
//   },
// });

// rateLimit({
//   methods: [
//     upsertUser,
//     removeUser,
//   ],
//   limit: 5,
//   timeRange: 1000,
// });

