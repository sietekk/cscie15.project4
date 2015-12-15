'use strict';

import React from 'react';
import {Label} from 'react-bootstrap';

export default class Skills extends React.Component {

  render() {

    let data = this.props.data;

    let skills = data.map(
      (skill, index) =>
        <Skill
          key={index}
          name={skill.name}
          level={skill.level}
          keywords={skill.keywords}
        />
    );

    return (
      <div className="tile">
        <h4 className="center-text">Skills</h4>
        <div className="line-separator" />
        {skills}
      </div>
    );
  }
}

class Skill extends React.Component {

  render() {

    let keywords = this.props.keywords.map(
      (keyword, index) =>
        <Label
          key={index}
          bsStyle="info"
          className="skill-btn-margin"
        >
          {keyword}
        </Label>
    );

    return (
      <div>
        <h5>{this.props.name} - {this.props.level}</h5>
        {keywords}
      </div>
    );
  }
}
