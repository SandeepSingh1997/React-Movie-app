import React, { Fragment } from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const getPagesButtons = () => {
    let pageButtons = [];
    let currPageNum = props.currPageNum;
    for (let i = 0, btnCnt = 0; i < props.numOfPages; i++) {
      if (
        i === 0 ||
        i === 1 ||
        i === currPageNum - 2 ||
        i === currPageNum - 1 ||
        i === currPageNum ||
        i === props.numOfPages -2 ||
        i === props.numOfPages - 1
      ) {
        let btnClass = "page-btn";
        if(i === currPageNum-1){
          btnClass +=" curr-page-btn"
        }
        pageButtons[btnCnt] = (
          <button
            key={i}
            className={btnClass}
            value={i + 1}
            onClick={(e) => {
              props.onPageSelect(Number(e.target.value));
            }}
          >
            {i + 1}
          </button>
        );
        btnCnt++;
      }
    }
    return pageButtons;
  };

  return (
    <Fragment>
      <div className="page-btn-container">{getPagesButtons()}</div>
    </Fragment>
  );
};

export default Pagination;
