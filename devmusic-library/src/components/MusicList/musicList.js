import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './musicList.css'

const MusicList = ({ music }) => {
  return ( 
                  
    <table className="table table-hover">
        <thead>
          <tr className="table-secondary">
            <th scope = "row">Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
            {music.map(song=>(
              <tr className="table-light">
                <td scope = "row">{song.title}</td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.releaseDate}</td>
              </tr>
            ))}
        </tbody>
      </table>

  )
};
export default MusicList;
