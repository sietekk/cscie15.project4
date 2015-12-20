'use strict';

import $ from 'jquery';
import React from 'react';
import Profile from './resume/profile';
import Work from './resume/work';
import Skills from './resume/skills';
import Education from './resume/education';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    this.loadResume();
  }

  loadResume() {
    fetch(this.props.resumeURL)
      .then(response => response.json())
      .then(data => this.setState({data: data}))
      .catch(err => console.error(this.props.resumeURL, err.toString()))
  }

  render() {
    return (
      <div className="container">
        {this.state.data ? this.renderResume() : this.renderLoading()}
      </div>
    );
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    );
  }

  renderResume() {
console.log('+++', this.state.data.resume_data);
    let profile = this.state.data.basics;
    let work = this.state.data.work;
    let skills = this.state.data.skills;
    let education = this.state.data.education;

    return (
      <div className="container">
        <div className="row">
          <aside className="col-md-4">
            <div>
              <Profile data={profile} />
            </div>
          </aside>
          <main className="col-md-8">
            <div>
              <Work data={work} />
              <Education data={education} />
              <Skills data={skills} />
            </div>
          </main>
        </div>
      </div>
    );
  }

}

Resume.defaultProps =
  {
    resumeURL: 'api/resume',
  };

