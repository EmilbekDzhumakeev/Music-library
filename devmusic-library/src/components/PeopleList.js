import React from "react";

const PeopleList = ({ music }) => {
  let renderedPeople = music.map((person) => {
    return (
      <li key={person.artist}>
        ID: {person.id} <br></br> Release Date: {person.releaseDate}<br></br>
        Title: {person.title} <br></br> Album: {person.album}<br></br>
        Artist: {person.artist} <br></br> Genre: {person.genre} 
        
      </li>
    );
  });
  return <ul>{renderedPeople}</ul>;
};

export default PeopleList;
