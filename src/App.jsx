import React, { Fragment, useEffect, useState } from "react";
import { paginate } from "./hooks/usePagination";

const App = () => {
  const data = [];

  for (let i = 1; i <= 102; i++) {
    data.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const pagination = paginate(data, currentPage);

  const sliceData = data.slice(
    pagination.itemsPerPage * currentPage - pagination.itemsPerPage,
    pagination.itemsPerPage * currentPage
  );

  return (
    <Fragment>
      <div className="flex gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        >
          {"<"}
        </button>

        {pagination.values.map((item, index) => (
          <button
            disabled={item === "..."}
            className={`py-1 px-3 bg-red-200 rounded-full ${
              currentPage === item && "bg-red-600"
            }`}
            onClick={() => setCurrentPage(item)}
            key={index}
          >
            {item}
          </button>
        ))}

        <button
          disabled={currentPage === pagination.totalPages}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        >
          {">"}
        </button>
      </div>

      {sliceData.map((data) => (
        <p>{data}</p>
      ))}
    </Fragment>
  );
};

export default App;
