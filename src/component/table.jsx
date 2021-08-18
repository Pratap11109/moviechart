import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Row from "./Row";

class Table extends Component {
  state = {
    Movies: getMovies(),
  };

  handalLike = (obj) => {
    const Movies = [...this.state.Movies];
    const index = Movies.indexOf(obj);
    Movies[index].like = !Movies[index].like;
    this.setState({
      Movies
    });
  };
  handalDelete = (obj) => {
    const Movies = this.state.Movies.filter((obj1) => obj !== obj1);
    this.setState({
      Movies,
    });
  };
  render() {
    const { Movies } = this.state;
    if (Movies.length === 0) return <p>No Movie left</p>;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Rating</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Movies.map((obj) => {
            return (
              <Row
                obj={obj}
                key={obj._id}
                name={obj.genre.name}
                onClick={() => this.handalLike(obj)}
                onDelete={() => this.handalDelete(obj)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
