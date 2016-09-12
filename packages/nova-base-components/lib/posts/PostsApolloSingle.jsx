import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';
import Posts from "meteor/nova:posts";
import Users from 'meteor/nova:users';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PostsItem from './PostsItem.jsx';

class PostsApolloSingle extends PostsItem {
  
  render() {

    const {loading, post} = this.props.data;

    let postClass = "posts-item"; 
    //if (post.sticky) postClass += " posts-sticky";

    return loading ? <div>loading</div> : (
      <div className={postClass}>

        <div className="posts-item-content">
          
          <h3 className="posts-item-title">
              {post.title}
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
      
      </div>
    )
  }
};
  
PostsApolloSingle.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    post: PropTypes.object,
  }).isRequired,
}

PostsApolloSingle.contextTypes = {
  currentUser: React.PropTypes.object
};

const withData = graphql(gql`
  query getOnePost {
    post {
      title 
    } 
  }
`)(PostsApolloSingle);

module.exports = withData;
export default withData;