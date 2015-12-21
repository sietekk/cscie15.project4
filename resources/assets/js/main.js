'use strict';

import React from 'react';
import Tile from './widget/Tile';
import Line from './widget/Line';
import NavBar from './widget/NavBar';
import {Image, Button} from 'react-bootstrap';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    this.loadBlogEntries();
  }

  loadBlogEntries() {
    fetch(this.props.blogURL)
      .then(response => response.json())
      .then(data => this.setState({data: data}))
      .catch(err => console.error(this.props.blogURL, err.toString()))
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        {this.state.data ? this.renderBlog() : this.renderLoading()}
      </div>
    );
  }

  renderLoading() {
    return (
      <div />
    );
  }

  renderBlog() {

    let data = this.state.data;
console.log(data);
    let blogItems = data.map(
      (item, index) =>
        <BlogItem
          key={index}
          title={item.title}
          date={item.date}
          link={item.link}
          linkText={item.link_text}
          summary={item.summary}
        />
    );

    return (
      <div>
        {blogItems}
      </div>
    );
  }
}

Main.defaultProps = {blogURL: 'api/blog',};

class BlogItem extends React.Component {
  render() {
    return (
      <Tile>
        <h1>{this.props.title} <small>{this.props.date}</small></h1>
        <a href={this.props.link}>{this.props.linkText}</a>
        <p>{this.props.summary}</p>
      </Tile>
    );
  }
}
