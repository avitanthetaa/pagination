export function paginate(arr, currentPage) {
  let itemsPerPage = 10;

  let values = [];
  let totalPages = Math.ceil(arr.length / itemsPerPage);
  //   console.log("🚀 ~ paginate ~ totalPages:", totalPages);

  // for (let i = 1; i <= totalPages; i++) {
  //   values.push(i)
  // }

  //   if (totalPages === 1) values = [1];
  //   else if (totalPages === 2) values = [1, 2];
  //   else if (totalPages === 3) values = [1, 2, 3];
  //   else if (totalPages === 4) values = [1, 2, 3, 4];
  //   else if (totalPages === 5) values = [1, 2, 3, 4, 5];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      values.push(i);
    }
  }
  if (totalPages > 5) {
    if (currentPage === 1) values = [1, 2, "...", totalPages];
    else if (currentPage === 2) values = [1, 2, 3, "...", totalPages];
    else if (currentPage === 3) values = [1, 2, 3, 4, "...", totalPages];
    else if (currentPage > 3 && currentPage === totalPages - 2)
      values = [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    else if (currentPage > 2 && currentPage === totalPages - 1)
      values = [1, "...", totalPages - 2, totalPages - 1, totalPages];
    else if (currentPage === totalPages)
      values = [1, "...", totalPages - 1, totalPages];
    else
      values = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
  }
  return { values, totalPages, itemsPerPage };
}
