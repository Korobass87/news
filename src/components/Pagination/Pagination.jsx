import React from 'react';

function Pagination({ maxPage, onPage, currentPage }) {
  const pagesArr = new Array(maxPage).fill(1).map((el, ind) => ind + el);

  return (
    <>
      <ul>
        {currentPage > 3 && (
          <>
            <li>
              <button
                onClick={e => {
                  onPage(1);
                }}
              >
                1
              </button>
            </li>
            <span>-</span>
          </>
        )}
        {pagesArr
          .filter(
            el => el <= Number(currentPage) + 2 && el >= Number(currentPage) - 2
          )
          .map((el, i) => (
            <li key={i}>
              <button
                onClick={e => {
                  onPage(el);
                }}
              >
                {el}
              </button>
            </li>
          ))}

        {currentPage < maxPage - 2 && (
          <>
            <span>-</span>
            <li>
              <button
                onClick={e => {
                  onPage(maxPage);
                }}
              >
                {maxPage}
              </button>
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default Pagination;
