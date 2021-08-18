import React, { Component } from "react";
// import "font-awesome/css/font-awesome.css";

const row = (props) => {
  const { obj, onClick } = props;
  let like = obj.like ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <tr>
      <td>{obj.title}</td>
      <td>{obj.genre.name}</td>
      <td>{obj.dailyRentalRate}</td>
      <td>
        <i
          className={like}
          aria-hidden="true"
          onClick={onClick}
          style={{ cursor: "pointer" }}
        ></i>
      </td>
      <td>
        <button className="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default row;
