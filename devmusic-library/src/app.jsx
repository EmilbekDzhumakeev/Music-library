import React, { Component } from "react";
import axios from "axios";
import MusicList from "./components/MusicList/musicList";
import NavBar from "./components/NavBar/navBar";
import MusicCreator from "./components/MusicCreator/musicCreator"; 
import "./app.css"
import SearchBar from "./components/SearchBar/searchBar";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        music: [], 
        filter: ''

    };
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    console.log("Component mounted!");
    this.fetchMusic();
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////
  handleChange(event){
    console.log(event);
    this.setState({
        filter: event.target.value
    });
} 
///////////////////////////////////////////////////////////////////////////////////////////////////////
  async fetchMusic() {
    try {
      let response = await axios.get("http://localhost:3000/api/songs");
      
      this.setState({ 
        music: response.data, 
        
      });
      console.log(this.state.music);
    } catch (err) {
      console.log(err);
    }
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    let filteredData = this.state.music.filter(song =>{
      if(song.title.toLowerCase().includes(this.state.filter.toLocaleLowerCase()) || 
        song.album.toLowerCase().includes(this.state.filter.toLocaleLowerCase()) || 
        song.artist.toLowerCase().includes(this.state.filter.toLocaleLowerCase())|| 
        song.genre.toLowerCase().includes(this.state.filter.toLocaleLowerCase()) ||
        song.releaseDate.toLowerCase().includes(this.state.filter.toLocaleLowerCase())) 
      
      return true;
    } )
    
    return ( 
      
      <React.Fragment>
      
        <NavBar />
        <SearchBar handleChange = {(event)=>this.handleChange(event)}/>
        
        <h1>Music library</h1>
        {this.state.music ? (
          <MusicList music={filteredData} />
        
        ) : (
          <h1>Loading....</h1>
        )}
      </React.Fragment>
    );
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////
}

export default App;