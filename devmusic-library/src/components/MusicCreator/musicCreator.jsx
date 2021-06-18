import React, { Component } from 'react';

class MusicCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            author:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        console.log(event);
        this.setState({
            [event.target.name]: event.target.value
        });
    } 

    handleSubmit (event){
        event.preventDefault();
        const music = {
         
            id: this.state.id,
            title: this.state.title,
            album: this.state.album,
            artist: this.state.artist,
            genre: this.state.genre,
            releaseDate: this.state.releaseDate,
    
        }
        this.props.addNewMusic(music);
        this.setState({
            id: '',
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: ''
        });
       
    }

    render() {
        return ( 
            <div>
                <hr /> 
                <center>
                    <h3>Add a new music!</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">
                            <div className="col-md-4">
                                <label>Title:</label>
                                <input type="text" name="title" value={this.state.title}
                                onChange={this.handleChange} />
                            </div>
                            <div className="col-md-4">
                                <label>Artist:</label>
                                <input type="text" name="artist" value={this.state.artist}
                                onChange={this.handleChange} />
                            </div>
                            <div className="col-md-4">
                                <input type="submit" value="Add" />
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}

export default MusicCreator;