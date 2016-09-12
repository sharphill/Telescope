import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PostsItem from './PostsItem.jsx';

// note: decorators should be activated by the babel plugin added, but it doesn't seem to be taken in consideration :/


@graphql(gql`
  query getSinglePost {
    posts {
      _id
      url
      title
    }
  }
`)
class PostsApolloList extends PostsItem {
  render() {
    const {loading, posts} = this.props.data;

    let postClass = "posts-item"; 
    // if (post.sticky) postClass += " posts-sticky";

    return loading ? <Telescope.components.PostsLoading /> :
      (<div>
        {posts.map(post => (
          <div className={postClass}>
        
          {/*
          <div className="posts-item-vote">
            <Telescope.components.Vote post={post} currentUser={this.context.currentUser}/>
          </div>
          */}
          
          {/*post.thumbnailUrl ? <Telescope.components.PostsThumbnail post={post}/> : null*/}

          <div className="posts-item-content">
                <h3 className="posts-item-title">
                  <Link to={post.url} className="posts-item-title-link">
                    {post.title}
                  </Link>
                  {/*this.renderCategories()*/}
                </h3>
              
            
            {/*
            <div className="posts-item-meta">
              {post.user? <div className="posts-item-user"><Telescope.components.UsersAvatar user={post.user} size="small"/><Telescope.components.UsersName user={post.user}/></div> : null}
              <div className="posts-item-date">{post.postedAt ? <FormattedRelative value={post.postedAt}/> : <FormattedMessage id="posts.dateNotDefined"/>}</div>
              <div className="posts-item-comments">
                <Link to={Posts.getPageUrl(post)}>
                  <FormattedMessage id="comments.count" values={{count: post.commentCount}}/>
                </Link>
              </div>
              {(this.context.currentUser && this.context.currentUser.isAdmin) ?<Telescope.components.PostsStats post={post} />:null}
              {this.renderActions()}
            </div>
            */}

          </div>

          {/*this.renderCommenters()*/}
        </div>
      ))}
    </div>)
  }
};
  
PostsApolloList.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool.isRequired,
    posts: React.PropTypes.object,
  }).isRequired,
};

PostsApolloList.contextTypes = {
  currentUser: React.PropTypes.object
};

module.exports = PostsApolloList;
export default PostsApolloList;