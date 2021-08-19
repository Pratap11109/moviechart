import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { totalMovies, pageSize, onClick, currentPage } = props;
  const size = Math.ceil(totalMovies / pageSize);

  if(size===1) return null;
  const pages = _.range(1, size + 1);
  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" href="#" onClick={() => onClick(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
