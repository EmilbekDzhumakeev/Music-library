import React, { Component } from "react";
import axios from "axios";

import PeopleList from "./components/PeopleList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: null,
        title: null,
        album: null,
        artist:null,
        genre: null,
        releaseDate: null

    };
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.fetchPeople();
  }

  async fetchPeople() {
    try {
      let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
      this.setState({
        music: response.data.results,
      });
      console.log(this.state.music);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state.music);
    console.log("Component rendered!");
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        {this.state.music ? (
          <PeopleList people={this.state.music} />
        ) : (
          <h1>Loading....</h1>
        )}
      </React.Fragment>
    );
  }
}

export default App;