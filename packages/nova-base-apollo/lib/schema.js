export default schema = [`
type Post {
  _id: String
  url: String
  title: String
}
type Query {
  posts: [Post]
  post: Post
}
schema {
  query: Query
}
`];
