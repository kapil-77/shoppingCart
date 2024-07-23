import React from 'react'
import './Pagination.css'

const Pagination = ({
  itemsPerPage,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const pageClickHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= itemsPerPage &&
      selectedPage !== currentPage
    ) {
      onPageChange(selectedPage)
    }
  }

  return (
    <div className="pagination">
      <span
        className={currentPage > 1 ? '' : 'disabled_pagination'}
        onClick={handlePrevious}
      >
        ◀️
      </span>

      {[...Array(totalPages)].map((_, i) => (
        <span
          key={i}
          className={currentPage === i + 1 ? 'active_page' : ''}
          onClick={() => pageClickHandler(i + 1)}
        >
          {i + 1}
        </span>
      ))}

      <span
        className={currentPage < totalPages ? ' ' : 'disabled_pagination'}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        ▶️
      </span>
    </div>
  )
}

export default Pagination
