'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';

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
        <Button
          key={index}
          bsStyle="info"
          bsSize="xsmall"
          className="skill-btn-margin"
        >
          {keyword}
        </Button>
    );

    return (
      <div>
        <h5>{this.props.name} - {this.props.level}</h5>
        {keywords}
      </div>
    );
  }
}
