import axios from 'axios';
import { decorate, observable, action } from 'mobx';

const baseURL = 'http://localhost:4000';

export default class Posts {
  posts = [];
  isLoading = false;
  isError = false;

  getPosts = async () => {
    try {
      const posts = await axios.get(`${baseURL}/posts`);

      this.posts = posts.data;
      this.isError = false;
    } catch (error) {
      console.error(error);
      this.isError = true;
    }
  }

  addPost = async post => {
    try {
      const res = await axios.post(`${baseURL}/posts`, post);

      console.log(res);
      this.isError = false;
      if (res.status === 201) this.getPosts();
    } catch (error) {
      console.error(error);
      this.isError = true;
    }
  }
}

decorate(Posts, {
  posts: observable,
  getPosts: action,
  addPost: action
});