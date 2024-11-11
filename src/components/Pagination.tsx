import PaginationB from "react-bootstrap/Pagination";

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  paginate: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginate,
}: Props) => {
  const pageNumbers: number[] = [];
  const startIndex: number = 1;

  for (let i = startIndex; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationB>
      {pageNumbers.map((page) => (
        <PaginationB.Item
          key={page}
          onClick={() => paginate(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </PaginationB.Item>
      ))}
    </PaginationB>
  );
};

export default Pagination;
