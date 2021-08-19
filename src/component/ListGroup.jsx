import React from "react";

const ListGroup = (props) => {
  const { genres, currentGener, onClick } = props;
  return (
    <div className="col-2">
      <ul className="list-group">
        <li
          className={
            currentGener === null ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onClick(null)}
        >
          All Genres
        </li>
        {genres.map((obj) => {
          return (
            <li
              key={obj._id}
              onClick={() => onClick(obj.name)}
              className={
                currentGener === obj.name
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {obj.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListGroup;
