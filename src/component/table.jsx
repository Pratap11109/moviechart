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
      Movies: Movies,
    });
  };

  render() {
    const { Movies } = this.state;

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
                onClick={() => this.handalLike(obj)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
