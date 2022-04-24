import React, { Fragment } from "react";
import './Pagination.css';

const Pagination = (props)=>{
    const getPagesButtons= ()=>{
        let pageButtons = [];
        for(let i=0; i<props.noOfPages; i++){
            pageButtons[i] = <button key={i} className="page-btn" value={i+1} onClick={(e)=>{props.onPageSelect(e.target.value)}}>{i+1}</button>;
        }
        return pageButtons;
    }

    return(<Fragment>
        <div className="page-btn-container">
        {getPagesButtons()}
        </div>
    </Fragment>);
}

export default Pagination;