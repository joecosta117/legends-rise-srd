import "./index.scss";

interface PaginationProps {
  count: number;
  content: any[];
  curPage: number;
  setPage: any;
}

function Pagination({ count, content, curPage, setPage }: PaginationProps) {
  const totalPages = Math.ceil(content.length / count);

  function getPaginationNumbers() {
    const pagination = [] as any;
    const maxVisiblePages = 2; // Number of pages to show on either side of the current page

    if (totalPages <= 1) return pagination; // No pagination needed for 1 or fewer pages

    // Always show the first page
    pagination.push(1);

    // Add ellipsis if currentPage is far from the first page
    if (curPage > maxVisiblePages + 1) {
      pagination.push("...");
    }

    // Add pages around the current page
    for (
      let i = Math.max(2, curPage - maxVisiblePages);
      i <= Math.min(totalPages - 1, curPage + maxVisiblePages);
      i++
    ) {
      pagination.push(i);
    }

    // Add ellipsis if currentPage is far from the last page
    if (curPage < totalPages - maxVisiblePages) {
      pagination.push("...");
    }

    // Always show the last page
    if (totalPages > 1) {
      pagination.push(totalPages);
    }

    return pagination;
  }

  const noPagination = content.length < 20;

  return (
    <div className="pagination">
      {!noPagination && (
        <button
          onClick={() => setPage((prev: any) => Math.max(prev - 1, 1))}
          disabled={curPage === 1}
          className="pagination__controls"
        >
          Previous
        </button>
      )}
      <div className="pagination__pages">
        {getPaginationNumbers().map((page: number | string, index: string) =>
          page === "..." ? (
            <span key={index} className="pagination__ellipsis">
              ...
            </span>
          ) : (
            <button
              key={index}
              className={`pagination__page ${
                page === curPage ? "pagination__page--active" : ""
              }`}
              onClick={() => setPage(page as number)}
            >
              {page}
            </button>
          ),
        )}
      </div>
      {!noPagination && (
        <button
          onClick={() => setPage((prev: any) => Math.min(prev + 1, totalPages))}
          disabled={curPage === totalPages}
          className="pagination__controls"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
