import { Fragment } from "react";
import { paginate } from "./hooks/paginate";

const App = () => {
  const data = [];

  for (let i = 1; i <= 102; i++) {
    data.push(i);
  }

  const { sliceData, currentPage, numbers, totalPages, goToPage } = paginate(
    data,
    10
  );

  return (
    <Fragment>
      <div className="flex gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          {"<"}
        </button>

        {numbers.map((item, index) => (
          <button
            disabled={item === "..."}
            className={`py-1 px-3 bg-red-200 rounded-full ${
              currentPage === item && "bg-red-600"
            }`}
            onClick={() => goToPage(item)}
            key={index}
          >
            {item}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          {">"}
        </button>
      </div>

      {sliceData.map((data, ind) => (
        <p key={ind}>{data}</p>
      ))}
    </Fragment>
  );
};

export default App;
