import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { totalMovies, pageSize, onClick,currentPage } = props;
  const size = Math.ceil(totalMovies / pageSize);

  const pages = _.range(1, size + 1);
  console.log(pages);
  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li key={page} className={page===currentPage?"page-item active":"page-item"}>
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
