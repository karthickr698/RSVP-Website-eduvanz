import React from "react";
import styles from './admin.module.css'
import { Button } from '@material-ui/core'

export default function Pagination({ paginate, curr_page, changePage, changePageData }) {
    return (
        <div>
            <ul className="pagination pagination-lg justify-content-center" data-aos="fade-up-right" data-aos-offset="140" data-aos-delay="100" data-aos-duration="200" data-aos-easing="ease-in-out" data-aos-once="true">
                {paginate.map(ele => {
                    if (ele === curr_page) {
                        return (
                            <li className="page-item active">
                                <Button
                                    className={styles.active}
                                    onClick={() => {
                                        return changePage(ele);
                                    }}
                                    key={ele}
                                >
                                    {ele}
                                </Button>
                            </li>
                        );
                    }
                    else {
                        return (
                            <li className="page-item active">
                                <Button
                                    className={styles.page}
                                    onClick={() => {
                                        return changePage(ele);
                                    }}
                                    key={ele}
                                >
                                    {ele}
                                </Button>
                            </li>
                        );

                    }
                })}
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