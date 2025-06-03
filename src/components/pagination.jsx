const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  itemsPerPageOptions = [10, 20, 50],
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1)
      onPageChange((prev) => ({ ...prev, page: prev.page - 1 }));
  };

  const handleNext = () => {
    if (currentPage < totalPages)
      onPageChange((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  return (
    <div className="flex md:flex-row md:items-center justify-between gap-4 mt-4">
      {/* Rows per page */}
      <div className="flex items-center gap-2">
        <label htmlFor="rowsPerPage" className="text-sm font-medium">
          Rows per page:
        </label>
        <select
          id="rowsPerPage"
          value={itemsPerPage}
          onChange={(e) => {
            onPageChange((prev) => ({
              ...prev,
              limit: Number(e.target.value),
            }));
            onPageChange((prev) => ({ ...prev, page: 1 })); // Reset to page 1
          }}
          className="border px-2 py-1 rounded text-sm"
        >
          {itemsPerPageOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
