import React, { Component } from 'react';
import Post from './Post';

import { inject, observer } from 'mobx-react';
import { Table } from 'reactstrap';

class PostsTable extends Component {
  componentDidMount = async () => {
    const { postsStore } = this.props.store;

    await postsStore.getPosts();
  }

  render() {
    const { postsStore } = this.props.store;

    return (
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Number</th>
            <th>Content</th>
            <th>Is checked</th>
          </tr>
        </thead>
        <tbody>
          {postsStore.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default inject('store')(observer(PostsTable));
