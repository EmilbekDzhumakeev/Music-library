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
        releaseDate: null,

        music: null

    };
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.fetchMusic();
  }

  async fetchMusic() {
    try {
      let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
      
      this.setState({ 
        music: response.data, 
        
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
        <h1>Music library</h1>
        {this.state.music ? (
          <PeopleList music={this.state.music} />
        ) : (
          <h1>Loading....</h1>
        )}
      </React.Fragment>
    );
  }
}

export default App;