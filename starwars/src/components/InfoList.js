import React, { Component } from 'react';
import { Card } from 'reactstrap';
export default class InfoList extends Component{

    render() {
    return (
      <div>
        {this.props.chars.map(info => {
          return(
            <div className="Card"
            name={info.name}
            key={info.name}
            >
            <Card>
              <h1 className="CardText"> Name: </h1>
              <h1 className="CardText"> {info.name} </h1>
              <h1 className="CardText"> Birth Year: </h1>
              <h1 className="CardText"> {info.birth_year} </h1>
              <h1 className="CardText"> Eye Color: </h1>
              <h1 className="CardText"> {info.eye_color} </h1>
              {/* <h1>{info.films}</h1> */}
              <h1 className="CardText"> Hair Color: </h1>
              <h1 className="CardText"> {info.hair_color} </h1>
              <h1 className="CardText"> Height: </h1>
              <h1 className="CardText"> {info.height} </h1>
              {/* <h1>{info.homeworld}</h1> */}
              <h1 className="CardText"> Gender: </h1>
              <h1 className="CardText"> {info.gender} </h1>
              <h1 className="CardText"> Mass: </h1>
              <h1 className="CardText"> {info.mass} </h1>
              {/* <h1>{info.species}</h1> */}
              <br/>
              </Card>
            </div>
          );
        })
        }
      </div>
    );
  }
};

