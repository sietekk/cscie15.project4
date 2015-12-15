'use strict';

import $ from 'jquery';
import React from 'react';
import Profile from './profile';
import Work from './work';
import Skills from './skills';
import Education from './education';

//var resumeData = require('./resume.json');
import resumeJSON from './resume';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: props.resume};
  }

  render() {

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

App.defaultProps = {resume: resumeJSON,};

