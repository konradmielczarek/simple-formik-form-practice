import React from 'react';

const Post = ({ post }) => {
  return (
    <tr>
      <th scope="row">{post.id}</th>
      <td>{post.title}</td>
      <td>{post.author}</td>
      <td>{post.number}</td>
      <td>{post.content}</td>
      <td>{post.isChecked ? <span><i className="fas fa-check" style={{ color: 'green' }}></i></span> : <span><i className="fas fa-times" style={{ color: 'red' }}></i></span>}</td>
    </tr>
  )
}

export default Post;
