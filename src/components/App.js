import React, { Component } from 'react';
import PostsTable from './PostsTable';
import AddPostForm from './AddPostForm';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container className="pt-5">
        <Row>
          <Col md="4" className="pb-3 pb-md-0">
            <AddPostForm />
          </Col>
          <Col md="8">
            <PostsTable />
          </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
