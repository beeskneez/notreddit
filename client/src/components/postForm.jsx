import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { createPost } from '../actions/index.jsx';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInputVal: '',
      bodyInputVal: '',
      imageInputVal: '',
    };
    this.onChange = this.onChange.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
  }

  addNewPost() {
    axios
      .post('/post', { post: this.state })
      .then((res) => {
        this.props.createPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <div className="ui huge form">
              <h2>Create New Post</h2>
              <div className="field">
                <label>title</label>
                <input
                  name="title"
                  placeholder="enter post title"
                  type="text"
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="field">
                <label>body</label>
                <textarea
                  name="body"
                  placeholder="enter post body"
                  type="text"
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="field">
                <label>image URL</label>
                <input
                  name="image"
                  placeholder="enter image URL"
                  type="text"
                  onChange={e => this.onChange(e)}
                />
              </div>
            </div>
            <div className="ui submit button" onClick={this.addNewPost}>
              Submit
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

// export default PostForm;
