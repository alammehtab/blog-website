import React, { Component } from "react";

class NewPost extends Component {
  state = {
    title: "",
    body: "",
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleBodyChange = (e) => {
    this.setState({
      body: e.target.value,
    });
  };

  handlePublishButton = () => {
    this.props.handlePublishBtnClick({title:this.state.title,body:this.state.body});
  };

  render() {
    return (
      <div>
        <h3>Share your toughts here</h3>
        <input
          placeholder="Put the title of your post here"
          style={{
            width: "85%",
            height: "30px",
            fontWeight: "bolder",
            fontSize: "large",
          }}
          onChange={this.handleTitleChange}
        />
        <br />
        <br />
        <textarea
          placeholder="Describe your post here"
          className="large"
          rows="10"
          style={{ width: "85%", resize: "none" }}
          onChange={this.handleBodyChange}
        />
        <br />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={this.handlePublishButton}
        >
          Publish
        </button>
      </div>
    );
  }
}

export default NewPost;
