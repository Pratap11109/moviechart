import _ from "lodash";

export function pagination(movieList, currentPage, pageSize) {
  let startIndex = (currentPage - 1) * pageSize;
  return _(movieList).splice(startIndex).take(pageSize).value();
}
