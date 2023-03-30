import { Pagination as BsPagination } from "react-bootstrap";

const Pagination = ({ onClickPrev, onClickNext, pageNo, disableButtons }) => {
  return (
    <BsPagination>
      <BsPagination.Prev
        onClick={onClickPrev}
        disabled={pageNo === 1 || disableButtons}
      />
      <BsPagination.Item>{pageNo}</BsPagination.Item>
      <BsPagination.Next onClick={onClickNext} disabled={disableButtons} />
    </BsPagination>
  );
};

export default Pagination;
