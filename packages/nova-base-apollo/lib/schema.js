import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Posts from 'meteor/nova:posts';
import Users from 'meteor/nova:users';
import Comments from 'meteor/nova:comments';
import Categories from 'meteor/nova:categories';

// create the graphql schema based on the extended schema of the collection (nova:posts -> nova:embedly, nova:newsletter, etc.) 
const postSchema = SchemaBridge.schema(Posts._c2._simpleSchema, 'Post');
const userSchema = SchemaBridge.schema(Users._c2._simpleSchema, 'User');
const commentSchema = SchemaBridge.schema(Comments._c2._simpleSchema, 'Comment');
const categorySchema = SchemaBridge.schema(Categories._c2._simpleSchema, 'Category');

console.log(`
${postSchema}
${userSchema}
${commentSchema}
${categorySchema}
type Query {
  posts: [Post]
  post: Post
  users: [User]
  user: User
  comments: [Comment]
  comment: Comment
  categories: [Category]
  category: Category
}
`)

export default schema = [`
${postSchema}
${userSchema}
${commentSchema}
${categorySchema}
type Query {
  posts: [Post]
  post: Post
  users: [User]
  user: User
  comments: [Comment]
  comment: Comment
  categories: [Category]
  category: Category
}
`];
