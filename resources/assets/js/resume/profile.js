'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';

export default class Profile extends React.Component {

  render() {

    let data = this.props.data;

    return (
      <div className="tile">
        <div>
          <Image className="center-img" src={data.picture} circle />
          <h4 className="center-text">{data.name} </h4>
          <div className="center-text">{data.label}</div>
        </div>
        <div className="line-separator" />
        <p className="center-text">
          {data.summary}
        </p>
        <div className="line-separator" />
        <ul className="list-unstyled text-center">
          <li>
            <span className="fa fa-lg fa-location-arrow icon-padding" />
            {data.location.region}, {data.location.countryCode}
          </li>
          <li>
            <span className="fa fa-lg fa-envelope icon-padding" />
            <a href="mailto:{data.email}">{data.email}</a>
          </li>
        </ul>
        <div className="line-separator" />
        <ul className="list-inline text-center">
          <li>
            <span className="fa fa-lg fa-github icon-padding" />
            <a href={data.profiles[0].url}>{data.profiles[0].network}</a>
          </li>
          <li>
            <span className="fa fa-lg fa-linkedin icon-padding" />
            <a href={data.profiles[1].url}>{data.profiles[1].network}</a>
          </li>
        </ul>
      </div>
    );
  }

}
