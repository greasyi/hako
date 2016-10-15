import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onSearchValueChange = this._onSearchValueChange.bind(this);

    this.state = {
      error: false,
      searchValue: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.postId !== nextProps.params.postId && this.state.error) {
      this.setState({error: false});
    }
  }

  _handleSubmit(event) {
    event.preventDefault();
    const {
      searchValue
    } = this.state;

    if (!searchValue.trim()) {
      this.setState({error: false, searchValue: ''});
      return;
    }

    let postId;
    switch (searchValue) {
      case 'a':
        postId = '1';
        break;
      case 'b':
        postId = '2';
        break;
      default:
        this.setState({error: true});
        return;
    }

    const nextPath = `/posts/${postId}`;
    this.setState({error: false});
    this.context.router.push(nextPath);
  }

  _onSearchValueChange({target: {value}}) {
    this.setState({searchValue: value});
  }

  render() {
    const {
      params: {
        postId
      }
    } = this.props;
    const {
      error,
      searchValue
    } = this.state;

    const postIds = [1, 2];
    const postLinks = _.map(postIds, (_postId) =>
      <li key={_postId}><Link to={`/posts/${_postId}`}>{`Go to post ${_postId}`}</Link></li>
    );

    const content = postId ?
      <div>{`You're looking at post ${postId}!`} <Link to={'/posts'}>Back to Posts</Link></div> :
      (<div>
        <ul>
          {postLinks}
        </ul>
      </div>);

    return (<div>
      <div>Posts!</div>
      {content}
      <div>Search!</div>
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          onChange={this._onSearchValueChange}
          placeholder='a for post 1 or b for post 2'
          value={searchValue}
        />
        <button type='submit' onClick={this._handleSubmit}>Go</button>
        {error ? 'Post not found.' : undefined}
      </form>
    </div>);
  }
}

Posts.contextTypes = {
  router: PropTypes.object
};

Posts.propTypes = {
  params: PropTypes.shape({
    postId: PropTypes.string // eslint-disable-line react/no-unused-prop-types
  })
};
