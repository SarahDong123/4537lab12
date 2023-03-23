import React from 'react'

function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  const pageNumbers = []
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      {
        (currentPage != 1) &&
        <button
        onClick={() => setCurrentPage(currentPage - 1)}
        > Prev. </button>
      }
      
      {
        pageNumbers.map(number => {
          if (number < currentPage + 5 && number > currentPage - 4)
          return (<>
            <button
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? "btnActive" : ""}
            >
            {number}
            </button>
            </>)
          })
        }

      {
        (currentPage != numberOfPages) &&
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
        > Next. </button>
      }
    </div>
  )
}

export default Pagination