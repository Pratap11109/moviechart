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

  sortByTitle=()=>{
    const Movies=[...this.state.Movies];
    Movies.sort((obj1,obj2)=>{
      if(obj1.title === obj2.title)return 0;
      return obj1.title<obj2.title?-1:1;
    })
    this.setState({
      Movies
    })
  };
  sortByGenre=()=>{
    const Movies=[...this.state.Movies];
    Movies.sort((obj1,obj2)=>{
      if(obj1.genre.name === obj2.genre.name)return 0;
      return obj1.genre.name<obj2.genre.name?-1:1;
    })
    this.setState({
      Movies
    })
  }
  sortByRating=()=>{
    const Movies=[...this.state.Movies];
    Movies.sort((obj1,obj2)=>{
      if(obj1.dailyRentalRate === obj2.dailyRentalRate)return 0;
      return obj1.dailyRentalRate<obj2.dailyRentalRate?-1:1;
    })
    this.setState({
      Movies
    })
  }
  render() {
    const { Movies } = this.state;
    if (Movies.length === 0) return <p>No Movie left</p>;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={this.sortByTitle} style={{cursor:"pointer"}}>Title</th>
            <th onClick={this.sortByRating} style={{cursor:"pointer"}}>Rating</th>
            <th onClick={this.sortByGenre} style={{cursor:"pointer"}}>Gener</th>
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
