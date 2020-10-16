import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react';
import apiHandler from "../api/apiHandler";


class AnimalDetail extends React.Component {
state = {
  animal : '',
}

  componentDidMount = () => {
    apiHandler
      .getOne("/api/animal/", this.props.match.params.id)
      .then((apiRes) => {
          console.log(apiRes);
      this.setState({ animal: apiRes.data });
      })
      .catch((apiErr) => {
        console.log(apiErr);
      });
  }


  render() {
    return (
      <div>
          <Grid>
    <Grid.Column width={4}>
    <h2>{this.state.animal.name}</h2>
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
      </div>
    )
  }
}

export default AnimalDetail;


