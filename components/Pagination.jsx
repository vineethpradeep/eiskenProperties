export default function Pagination({
  page,
  pageSize,
  totalItems,
  onPageChange,
}) {
  const totalPage = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      onPageChange(newPage);
    }
  };

  return (
    <section className="container mx-auto flex justify-center items-center my-8">
      <button
        className={`mr-2 px-2 py-1 border border-gray-300 rounded bg-gray-800 text-white ${
          page === 1 && "cursor-not-allowed opacity-15"
        }`}
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>
      <span className="mx-2">
        Page {page} of {totalPage}
      </span>
      <button
        className={`ml-2 px-2 py-1 border border-gray-300 rounded bg-gray-800 text-white ${
          page === totalPage && "cursor-not-allowed opacity-15"
        }`}
        disabled={page === totalPage}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </section>
  );
}
