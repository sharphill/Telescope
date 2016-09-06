//import { PostConnector } from './connectors';
import Posts from 'meteor/nova:posts';

const resolvers = {
  Query: {
    posts() {
      return Posts.find({}, {limit: 5}).fetch(); // return error "Expected Iterable, but did not find one for field Query.posts.", however this line should return an array. returning a Promise and then an array maybe?
    },
    post() {
      return Posts.findOne({});
    }
  },
};

export default resolvers;