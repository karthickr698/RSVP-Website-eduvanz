import React from "react";
import styles from './admin.module.css'
import { Button } from '@material-ui/core'

export default function Pagination({ paginate, curr_page, changePage, changePageData }) {
    console.log(paginate)
    return (
        <div>
            <ul className="pagination pagination-lg justify-content-center" data-aos="fade-up-right" data-aos-offset="140" data-aos-delay="100" data-aos-duration="200" data-aos-easing="ease-in-out" data-aos-once="true">
                {
                    curr_page === 1 ?
                        <button
                            className="btn btn-dark btn-lg pl-5 pr-5"
                            onClick={() => {
                                return changePage(curr_page - 1);
                            }}
                            disabled
                        >Prev
                        </button> :
                        <button
                            className="btn btn-dark btn-lg pl-5 pr-5"
                            onClick={() => {
                                return changePage(curr_page - 1);
                            }}
                        >
                            Prev
                        </button>
                }
                <div className="font-weight-bold pt-2 pl-4 pr-4" style={{ fontSize: "20px" }}>{curr_page} of {paginate.length}</div>
                {
                    (paginate.length - curr_page) == 0 ?
                        <button className="btn btn-dark btn-lg pl-5 pr-5"
                            onClick={() => {
                                return changePage(curr_page + 1);
                            }}
                            disabled
                        >
                            Next
                        </button> :
                        <button className="btn btn-dark btn-lg pl-5 pr-5"
                            onClick={() => {
                                return changePage(curr_page + 1);
                            }}
                        >
                            Next
                        </button>
                }
            </ul>
            <div className="col-md-3 offset-1 mx-auto d-block" >
                <select
                    className="form-control"
                    onChange={e => {
                        changePageData(e.target.value);
                    }}
                >
                    <option disabled selected>
                        select per page
                    </option>
                    <option>6</option>
                    <option>30</option>
                    <option>45</option>
                    <option>60</option>
                    <option>100</option>
                </select>
            </div>
        </div>
    );
}