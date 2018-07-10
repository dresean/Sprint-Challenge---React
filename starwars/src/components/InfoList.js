import React, { Component } from 'react';

export default class InfoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.chars.map(info => {
          return(
            <div>
              <h1>{info.name}</h1>
              <h1>{info.birth_year}</h1>
              <h1>{info.eye_color}</h1>
              <h1>{info.films}</h1>
              <h1>{info.hair_color}</h1>
              <h1>{info.gender}</h1>
              <h1>{info.height}</h1>
              <h1>{info.homeworld}</h1>
              <h1>{info.gender}</h1>
              <h1>{info.mass}</h1>
              <h1>{info.species}</h1>
              <br/>
            </div>
          );
        })
        }
      </div>
    )
  }
};
