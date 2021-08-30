import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { pagination } from "../exOperation/pagination";
import Pagination from "./Pagination";
import ListGroup from "./ListGroup";
import Row from "./Row";
// import {Router} from "react-router-dom";
class Table extends Component {
  state = {
    Movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    currentGener: null,
  };

  componentDidMount() {
    this.setState({
      Movies: getMovies(),
      genres: getGenres(),
    });
  }
  handalLike = (obj) => {
    const Movies = [...this.state.Movies];
    const index = Movies.indexOf(obj);
    Movies[index].like = !Movies[index].like;
    this.setState({
      Movies,
    });
  };
  handalDelete = (obj) => {
    const Movies = this.state.Movies.filter((obj1) => obj !== obj1);
    this.setState({
      Movies,
    });
  };
  sortByTitle = () => {
    const Movies = [...this.state.Movies];
    Movies.sort((obj1, obj2) => {
      if (obj1.title === obj2.title) return 0;
      return obj1.title < obj2.title ? -1 : 1;
    });
    this.setState({
      Movies,
    });
  };
  sortByGenre = () => {
    const Movies = [...this.state.Movies];
    Movies.sort((obj1, obj2) => {
      if (obj1.genre.name === obj2.genre.name) return 0;
      return obj1.genre.name < obj2.genre.name ? -1 : 1;
    });
    this.setState({
      Movies,
    });
  };
  sortByRating = () => {
    const Movies = [...this.state.Movies];
    Movies.sort((obj1, obj2) => {
      if (obj1.dailyRentalRate === obj2.dailyRentalRate) return 0;
      return obj1.dailyRentalRate < obj2.dailyRentalRate ? -1 : 1;
    });
    this.setState({
      Movies,
    });
  };
  handalPage = (page) => {
    this.setState(
      {
        currentPage: page,
      },
      () => console.log(this.state.currentPage)
    );
  };
  handalGenres = (obj) => {
    this.setState({
      currentGener: obj,
    });
  };

  render() {
    const { Movies, currentPage, pageSize, genres, currentGener } = this.state;
    const movies = Movies.filter((obj) => {
      return currentGener === obj.genre.name || currentGener === null;
    });

    const movieCopy = [...movies];
    const count = movies.length;

    const filterMovies = pagination(movieCopy, currentPage, pageSize);
    return (
      <div className="row my-4">
        <ListGroup
          genres={genres}
          currentGener={currentGener}
          onClick={this.handalGenres}
        />
        <div className="col">
          <p style={{marginLeft:30,fontSize: 30}} >Showing {count} movies in the Database </p>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th onClick={this.sortByTitle} style={{ cursor: "pointer" }}>
                  Title
                </th>
                <th onClick={this.sortByRating} style={{ cursor: "pointer" }}>
                  Rating
                </th>
                <th onClick={this.sortByGenre} style={{ cursor: "pointer" }}>
                  Gener
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filterMovies.map((obj) => {
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
          <Pagination
            totalMovies={count}
            pageSize={pageSize}
            onClick={this.handalPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Table;
