import React, { Fragment } from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const getPagesButtons = () => {
    let pageButtons = [];
    let currPageNum = props.currPageNum;
 
        pageButtons[0] = (
          <button
            key={0}
            className={"page-btn"}
            value={'<'}
            onClick={(e) => {
              props.onPageSelect(e.target.value);
            }}
            disabled={currPageNum === 1}
          >
            {'<'}
          </button>
        );

    let btnCnt = 1;
    for (let i = 1; i <= props.numOfPages; i++) {
      if (
        i === 1 ||
        i === currPageNum ||
        i === props.numOfPages
      ) {
        let btnClass = "page-btn";
        if(i === currPageNum){
          btnClass +=" curr-page-btn"
        }
        pageButtons[btnCnt] = (
          <button
            key={btnCnt}
            className={btnClass}
            value={i}
            onClick={(e) => {
              props.onPageSelect(Number(e.target.value));
            }}
          >
            {i}
          </button>
        );
        btnCnt++;
      }
    }
    pageButtons[btnCnt] = (
      <button
        key={btnCnt}
        className={"page-btn"}
        value={'>'}
        onClick={(e) => {
          props.onPageSelect(e.target.value);
        }}
        disabled={currPageNum === props.numOfPages}
      >
        {'>'}
      </button>
    );

    return pageButtons;
  };

  return (
    <Fragment>
      <div className="page-btn-container">{getPagesButtons()}</div>
    </Fragment>
  );
};

export default Pagination;
