'use strict';

import React from 'react';

export default class Work extends React.Component {


  render() {

    let data = this.props.data;

    let lastIndex = data.length - 1;
    let workItems = data.map(
      (workItem, index) =>
        <WorkItem
          key={index}
          company={workItem.company}
          position={workItem.position}
          website={workItem.website}
          startDate={workItem.startDate}
          endDate={workItem.endDate}
          summary={workItem.summary}
          highlights={workItem.highlights}
          showDivider={(index === lastIndex) ? false : true}
        />
    );

    return (
      <div className="tile">
        <h4 className="center-text">Experience</h4>
        <div className="line-separator" />
        {workItems}
      </div>
    );
  }
}

class WorkItem extends React.Component {

  render() {

    let dates = '';
    if (isEmpty(this.props.endDate)) {
      dates = this.props.startDate + ' - Current';
    } else {
      dates = this.props.startDate + ' - ' + this.props.endDate;
    }

    let highlights = this.props.highlights.map(
      (highlight, index) =>
        <Highlight
          key={index}
          highlight={highlight}
        />
    );

    return (
      <div key={this.props.key}>
        <h4>
          <a href={this.props.website}>{this.props.company}</a>
        </h4>
        <h6>{this.props.position}</h6>
        <div>
          <label>{dates}</label>
        </div>
        <div>
          <label>Highlights</label>
          <ul>
            {highlights}
          </ul>
          <label>Summary</label>
          <p className="block-paragraph">{this.props.summary}</p>
        </div>
        {this.props.showDivider && <div className="line-separator" />}
      </div>
    );
  }
}

class Highlight extends React.Component {

  render() {
    return (
      <li key={this.props.key}>
        {this.props.highlight}
      </li>
    );
  }
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

