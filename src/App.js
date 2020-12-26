import React, { Component } from "react";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";

class HomePage extends Component {
  // MAIN STATE OBJ OF THE APP
  state = {
    posts: [],
    newBtnClicked: false,
  };

  handleNewBtnClick = () => {
    this.setState({
      newBtnClicked: true,
    });
  };

  handlePublishBtnClick = (data) => {
    this.state.posts.push(data);
    this.setState({
      newBtnClicked: false,
      posts: this.state.posts,
    });
  };

  render() {
    let conditionalRendering;

    if (this.state.newBtnClicked) {
      conditionalRendering = (
        <div>
          <Header handleNewBtnClick={this.handleNewBtnClick} />
          <hr />
          <NewPost handlePublishBtnClick={this.handlePublishBtnClick} />
        </div>
      );
    } else {
      conditionalRendering = (
        <div>
          <Header handleNewBtnClick={this.handleNewBtnClick} />
          <hr />
          <PostsList posts={this.state.posts} key={this.state.posts.id} />
        </div>
      );
    }
    return <div>{conditionalRendering}</div>;
  }
}

export default HomePage;
