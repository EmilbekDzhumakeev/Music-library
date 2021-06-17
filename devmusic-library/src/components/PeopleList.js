import React from "react";

const PeopleList = ({ music }) => {
  let renderedPeople = music.map((person) => {
    return (
      <li key={person.artist}>
        Artist: {person.artist} <br></br> Genre: {person.genre}
      </li>
    );
  });
  return <ul>{renderedPeople}</ul>;
};

export default PeopleList;
