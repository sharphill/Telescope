import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Posts from 'meteor/nova:posts';
import Users from 'meteor/nova:users';
import Comments from 'meteor/nova:comments';
import Categories from 'meteor/nova:categories';

const UserNestedFieldsResolvers = SchemaBridge.resolvers(Users._c2._simpleSchema, 'User');

console.log('// --- resolvers');
// the code belows solve: "Error: User.telescope.downvotedComments defined in resolvers, but not in schema"
// error due to kuip:schema-graphql-bridge's generated resolver
delete UserNestedFieldsResolvers.User['telescope.downvotedComments'];
delete UserNestedFieldsResolvers.User['telescope.downvotedPosts'];
delete UserNestedFieldsResolvers.User['telescope.upvotedComments'];
delete UserNestedFieldsResolvers.User['telescope.upvotedPosts'];

UserNestedFieldsResolvers.UserTelescope = {
  downvotedComments: ({downvotedComments}) => downvotedComments,
  downvotedPosts: ({downvotedPosts}) => downvotedPosts,
  upvotedComments: ({upvotedComments}) => upvotedComments,
  upvotedPosts: ({upvotedPosts}) => upvotedPosts,
};

const resolvers = {
  ...UserNestedFieldsResolvers,
  Query: {
    posts(root, args, context) {
      return Posts.find({}, {limit: 5}).fetch();
    },
    post(root, args, context) {
      return Posts.findOne({});
    },
    users(root, args, context) {
      return Users.find({}, {limit: 5}).fetch();
    },
    user(root, args, context) {
      return Users.findOne({});
    },
    comments(root, args, context) {
      return Comments.find({}, {limit: 5}).fetch();
    },
    comment(root, args, context) {
      return Comments.findOne({});
    },
    categories(root, args, context) {
      return Categories.find({}, {limit: 5}).fetch();
    },
    category(root, args, context) {
      return Categories.findOne({});
    },
  },
};

export default resolvers;